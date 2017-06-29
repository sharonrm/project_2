DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS shows CASCADE;

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL
);

CREATE TABLE movies (
	id BIGSERIAL PRIMARY KEY,
	user_id INT REFERENCES users(id),
	title VARCHAR NOT NULL,
	poster_path VARCHAR,
	release_date VARCHAR
);
