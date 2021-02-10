-- up
CREATE TABLE cats (
  cat_id uuid not null default uuid_generate_v4(),
  breed_id uuid not null,
  owner_id uuid not null,
  name varchar(15) not null,
  age integer not null default 1,
  hunger integer not null default 1,
  love integer not null default 10,
  mood varchar(15) not null default 'content',
  primary key (cat_id),
  foreign key (breed_id)
    references breeds (breed_id),
  foreign key (owner_id)
    references owners (owner_id)
    on delete cascade
);
---
DROP TABLE cats;
-- down

