DROP TABLE IF EXISTS users;
CREATE TABLE users(
	id TEXT NOT NULL PRIMARY KEY
);

DROP TABLE IF EXISTS bars;
CREATE TABLE bars(
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	reserves INTEGER NOT NULL DEFAULT 0
);