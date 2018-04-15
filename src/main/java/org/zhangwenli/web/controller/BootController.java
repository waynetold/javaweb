package org.zhangwenli.web.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = "健康检测")
@RestController
@RequestMapping("/api")
public class BootController {

    @ApiOperation("Ping")
    @RequestMapping(path = "/ping", method = RequestMethod.GET)
    public String ping() {
        return "pong\n";
    }
}
