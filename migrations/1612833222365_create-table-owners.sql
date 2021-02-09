-- up
CREATE TABLE owners (
  owner_id uuid not null default uuid_generate_v4(),
  google_id string
)
---

-- down
