package org.zhangwenli.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zhangwenli.web.service.SchoolmateService;

@RestController
public class SchoolmateController {

    private SchoolmateService schoolmateService;

    @Autowired
    public void setSchoolmateService(SchoolmateService schoolmateService) {
        this.schoolmateService = schoolmateService;
    }

    @RequestMapping("/ping")
    public String ping() {
        return "pong\n";
    }

}
