package org.zhangwenli.web.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.zhangwenli.web.entity.User;

@Mapper
public interface UserMapper {

    User findOneByNameAndPassword(@Param("name") String name, @Param("password") String password);
}
