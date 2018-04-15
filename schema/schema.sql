-- mysql 5.7
CREATE DATABASE campus
  CHARACTER SET utf8;

USE campus;

CREATE TABLE IF NOT EXISTS schoolmate (
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT '主键',
  name VARCHAR(32) NOT NULL COMMENT '姓名',

  phone VARCHAR(20) COMMENT '手机',
  qq VARCHAR(16) COMMENT 'QQ号码',
  wechat VARCHAR(32) COMMENT '微信号',
  college VARCHAR(32) COMMENT '学院',
  the_class VARCHAR(20) COMMENT '班级',
  address VARCHAR(32) COMMENT '住址',
  graduation_year VARCHAR(32) COMMENT '毕业年份',

  created_at DATETIME NOT NULL DEFAULT NOW() COMMENT '创建时间',
  updated_at DATETIME NOT NULL DEFAULT NOW() COMMENT '更新时间'
);

CREATE TABLE IF NOT EXISTS user (
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT '主键',
  name VARCHAR(32) NOT NULL COMMENT '名字',
  password VARCHAR(32) NOT NULL COMMENT '密码',
  role VARCHAR(32) NOT NULL COMMENT '用户角色：administrator, teacher',

  created_at DATETIME NOT NULL DEFAULT NOW() COMMENT '创建时间',
  updated_at DATETIME NOT NULL DEFAULT NOW() COMMENT '更新时间'
);
