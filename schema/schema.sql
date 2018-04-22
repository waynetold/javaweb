-- sqlite
CREATE TABLE schoolmate (
  id              INTEGER PRIMARY KEY      AUTOINCREMENT,
  name            VARCHAR(32) NOT NULL,

  phone           VARCHAR(20),
  qq              VARCHAR(16),
  wechat          VARCHAR(32),
  college         VARCHAR(32),
  the_class       VARCHAR(20),
  address         VARCHAR(32),
  graduation_year VARCHAR(32),

  created_at      DATETIME    NOT NULL     DEFAULT CURRENT_TIMESTAMP,
  updated_at      DATETIME    NOT NULL     DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       VARCHAR(32) NOT NULL,
  password   VARCHAR(32) NOT NULL,
  role       VARCHAR(32) NOT NULL,

  created_at DATETIME    NOT NULL,
  updated_at DATETIME    NOT NULL
);
