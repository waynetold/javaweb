package org.zhangwenli.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.zhangwenli.web.entity.Schoolmate;
import org.zhangwenli.web.mapper.SchoolmateMapper;
import org.zhangwenli.web.util.Page;

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
        this.schoolmateMapper.updateById(id, schoolmate);
    }

    public Page list(Integer page, Integer size, Schoolmate schoolmate) {
        List<Schoolmate> l = this.schoolmateMapper.findAll(size, (page - 1) * size, schoolmate);
        Integer c = this.schoolmateMapper.count(schoolmate);
        return new Page<>(c, l);
    }
}
