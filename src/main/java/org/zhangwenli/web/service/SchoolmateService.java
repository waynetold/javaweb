package org.zhangwenli.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.zhangwenli.web.entity.Schoolmate;
import org.zhangwenli.web.mapper.SchoolmateMapper;

import java.util.List;

@Service
public class SchoolmateService {

    private SchoolmateMapper schoolmateMapper;

    @Autowired
    public SchoolmateService(SchoolmateMapper schoolmateMapper) {
        this.schoolmateMapper = schoolmateMapper;
    }

    public void addOne(Schoolmate schoolmate) {
        this.schoolmateMapper.create(schoolmate);
    }

    public void deleteOneById(String id) {
        this.schoolmateMapper.deleteById(id);
    }

    public void updateOneById(String id, Schoolmate schoolmate) {
        this.schoolmateMapper.updateById(id,schoolmate);
    }

    public List<Schoolmate> list(Integer page, Integer size, Schoolmate schoolmate) {
        return this.schoolmateMapper.findAll(size, (page - 1) * size, schoolmate);
    }
}
