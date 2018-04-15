package org.zhangwenli.web.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.zhangwenli.web.entity.Schoolmate;

import java.util.List;

@Mapper
public interface SchoolmateMapper {

    void create(@Param("schoolmate") Schoolmate schoolmate);

    List<Schoolmate> findAll(@Param("limit") Integer limit,
                             @Param("offset") Integer offset,
                             @Param("schoolmate") Schoolmate schoolmate);

    void updateById(@Param("id") String id, @Param("schoolmate") Schoolmate schoolmate);

    void deleteById(@Param("id") String id);

    Integer count(@Param("schoolmate") Schoolmate schoolmate);
}
