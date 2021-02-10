-- up
CREATE TABLE breeds (
  breed_id uuid not null default uuid_generate_v4(),
  breed varchar(255) not null,
  primary key (breed_id)
);
---
DROP TABLE breeds;
-- down

