package org.zhangwenli.web.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.zhangwenli.web.entity.User;
import org.zhangwenli.web.service.UserService;
import springfox.documentation.annotations.ApiIgnore;

import javax.servlet.http.HttpSession;
import java.util.Objects;

@Api(tags = "用户管理")
@RestController
@RequestMapping("/api/user")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @ApiOperation("登录")
    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public ResponseEntity login(@RequestParam("username") String username,
                                @RequestParam("password") String password,
                                HttpSession session) {
        User user = this.userService.authenticate(username, password);
        session.setAttribute("user", user);
        return ResponseEntity.ok(user);
    }

    @ApiOperation("当前用户")
    @RequestMapping(path = "/me", method = RequestMethod.GET)
    public ResponseEntity login(@ApiIgnore @SessionAttribute(name = "user", required = false) User user) {
        if (Objects.nonNull(user)) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @ApiOperation("登出")
    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public ResponseEntity logout(HttpSession session) {
        session.removeAttribute("user");
        return ResponseEntity.ok().build();
    }
}
