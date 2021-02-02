BEGIN;

CREATE TABLE IF NOT EXISTS reviews (
  id VARCHAR PRIMARY KEY,
  title VARCHAR NOT NULL,
  rating SMALLINT NOT NULL,
  author VARCHAR NOT NULL,
  body VARCHAR
);

COMMIT;