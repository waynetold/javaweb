package org.zhangwenli.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.zhangwenli.web.entity.User;
import org.zhangwenli.web.mapper.UserMapper;

import java.util.Objects;

@Service
public class UserService {

    private UserMapper userMapper;

    @Autowired
    public UserService(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public User authenticate(String username, String password) {
        User user = this.userMapper.findOneByNameAndPassword(username, password);
        if (Objects.isNull(user)) {
            throw new RuntimeException("用户名或密码错误！");
        }
        return user;
    }
}
