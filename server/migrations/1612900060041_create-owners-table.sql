-- up
CREATE TABLE owners (
  owner_id uuid not null default uuid_generate_v4(),
  gmail_id varchar(255) not null,
  email varchar(255) not null,
  secret varchar(255)
)
---
DROP TABLE owners
-- down
