-- up
CREATE TABLE owners_cats (
    owner_id uuid not null,
    cat_id uuid not null,
    foreign key (owner_id)
      references owners (owner_id)
      on delete cascade,
    foreign key (cat_id)
      references cats (cat_id)
      on delete cascade
);
---
DROP TABLE owners_cats;
-- down
