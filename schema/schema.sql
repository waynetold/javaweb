-- mysql 5.7
CREATE DATABASE campus
  CHARACTER SET utf8;

USE campus;

CREATE TABLE schoolmate (
  id VARCHAR(36) DEFAULT UUID() COMMENT '主键',
  created DATETIME DEFAULT NOW() COMMENT '创建时间',
  updated DATETIME DEFAULT NOW() COMMENT '更新时间'
)