package org.zhangwenli.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.zhangwenli.web.mapper.SchoolmateMapper;

@Service
public class SchoolmateService {

    private SchoolmateMapper schoolmateMapper;

    @Autowired
    public void setSchoolmateMapper(SchoolmateMapper schoolmateMapper) {
        this.schoolmateMapper = schoolmateMapper;
    }

}
