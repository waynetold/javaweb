# 预置发布脚本

- 调用系统（Unix、类Unix）默认JRE，请自行根据环境修改

```shell
# 前台启动
$ ./bin/start
# 后台启动
$ ./bin/startd
# 停止
$ ./bin/stop
# 使用参数
$ ./bin/startd --server.port=8011 --spring.profiles.active=test
```