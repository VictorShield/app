"""Backend API tests for João Victor Tavares portfolio."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://marketing-genius-3d.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ----- Health -----
def test_root_health(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    data = r.json()
    assert "message" in data
    assert "API" in data["message"] or "Strategist" in data["message"]


# ----- Contact submit -----
def test_contact_post_valid_and_persists(client):
    payload = {
        "name": "TEST_User",
        "email": "TEST_user@example.com",
        "message": "TEST message body for automated test",
    }
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["message"] == payload["message"]
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert "created_at" in data

    # Verify persistence via GET
    r2 = client.get(f"{API}/contact")
    assert r2.status_code == 200
    rows = r2.json()
    assert isinstance(rows, list)
    ids = [r.get("id") for r in rows]
    assert data["id"] in ids


def test_contact_post_invalid_email(client):
    payload = {"name": "TEST_x", "email": "not-an-email", "message": "hi"}
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 422


def test_contact_post_empty_name(client):
    payload = {"name": "", "email": "a@b.com", "message": "hi"}
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 422


def test_contact_post_empty_message(client):
    payload = {"name": "x", "email": "a@b.com", "message": ""}
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 422


def test_contact_post_missing_fields(client):
    r = client.post(f"{API}/contact", json={})
    assert r.status_code == 422


# ----- Contact list sorted desc -----
def test_contact_list_sorted_desc(client):
    # Create two submissions
    p1 = {"name": "TEST_A", "email": "a@test.com", "message": "first"}
    p2 = {"name": "TEST_B", "email": "b@test.com", "message": "second"}
    r1 = client.post(f"{API}/contact", json=p1)
    r2 = client.post(f"{API}/contact", json=p2)
    assert r1.status_code == 200 and r2.status_code == 200

    listing = client.get(f"{API}/contact").json()
    assert len(listing) >= 2
    # Check sorted desc by created_at
    timestamps = [row["created_at"] for row in listing[:5]]
    sorted_ts = sorted(timestamps, reverse=True)
    assert timestamps == sorted_ts, f"Not sorted desc: {timestamps}"

    # Second insertion should appear before first
    ids = [row["id"] for row in listing]
    assert ids.index(r2.json()["id"]) < ids.index(r1.json()["id"])
