"""Backend API tests for Moon Beauty Space.

Covers:
  - Health: GET /api/
  - Booking CRUD: POST /api/bookings, GET /api/bookings
  - Validation: missing required fields -> 422
"""
import os
import time
import pytest
import requests
from dotenv import load_dotenv
from pathlib import Path

# Load frontend .env which holds the public URL we should test against
load_dotenv(Path(__file__).resolve().parents[2] / "frontend" / ".env")

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
assert BASE_URL, "REACT_APP_BACKEND_URL must be set"
API = f"{BASE_URL}/api"


@pytest.fixture(scope="session")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_root(self, client):
        r = client.get(f"{API}/", timeout=20)
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert isinstance(data["message"], str)
        assert len(data["message"]) > 0


# ---------- Bookings ----------
class TestBookings:
    def test_create_booking_success(self, client):
        payload = {
            "name": "TEST_Anna Kowalska",
            "phone": "+48 511 000 111",
            "service": "Zabiegi Beauty",
            "preferred_date": "piątek, 18:00",
            "message": "TEST booking — please ignore",
            "language": "pl",
        }
        r = client.post(f"{API}/bookings", json=payload, timeout=20)
        assert r.status_code == 200, r.text
        data = r.json()

        # Required generated fields
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data and isinstance(data["created_at"], str)
        assert data.get("status") == "new"

        # Echoed fields
        for k in ("name", "phone", "service", "preferred_date", "message", "language"):
            assert data[k] == payload[k]

        # Persistence: should appear in list
        time.sleep(0.3)
        r2 = client.get(f"{API}/bookings", timeout=20)
        assert r2.status_code == 200
        items = r2.json()
        assert isinstance(items, list)
        ids = [it.get("id") for it in items]
        assert data["id"] in ids

    def test_create_booking_missing_name(self, client):
        r = client.post(
            f"{API}/bookings",
            json={"phone": "+48 511 000 111", "service": "Stylizacja"},
            timeout=20,
        )
        assert r.status_code == 422

    def test_create_booking_missing_phone(self, client):
        r = client.post(
            f"{API}/bookings",
            json={"name": "TEST_X", "service": "Stylizacja"},
            timeout=20,
        )
        assert r.status_code == 422

    def test_create_booking_missing_service(self, client):
        r = client.post(
            f"{API}/bookings",
            json={"name": "TEST_X", "phone": "+48 511 000 111"},
            timeout=20,
        )
        assert r.status_code == 422

    def test_create_booking_empty_required(self, client):
        # min_length=1 should reject empty string
        r = client.post(
            f"{API}/bookings",
            json={"name": "", "phone": "", "service": ""},
            timeout=20,
        )
        assert r.status_code == 422

    def test_list_bookings_sorted_desc(self, client):
        # Create two bookings with a small gap
        b1 = client.post(
            f"{API}/bookings",
            json={
                "name": "TEST_Order1",
                "phone": "+48 500 000 001",
                "service": "Konsultacje",
            },
            timeout=20,
        )
        assert b1.status_code == 200
        time.sleep(1.1)
        b2 = client.post(
            f"{API}/bookings",
            json={
                "name": "TEST_Order2",
                "phone": "+48 500 000 002",
                "service": "Konsultacje",
            },
            timeout=20,
        )
        assert b2.status_code == 200

        r = client.get(f"{API}/bookings", timeout=20)
        assert r.status_code == 200
        items = r.json()
        assert len(items) >= 2

        # Locate our two records, verify the newer one appears earlier
        id1 = b1.json()["id"]
        id2 = b2.json()["id"]
        positions = {it["id"]: idx for idx, it in enumerate(items) if it.get("id") in (id1, id2)}
        assert id1 in positions and id2 in positions
        assert positions[id2] < positions[id1], "list_bookings must be sorted by created_at desc"

        # Each item exposes id and created_at
        for it in items[:5]:
            assert "id" in it
            assert "created_at" in it
