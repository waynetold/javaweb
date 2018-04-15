package org.zhangwenli.web.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.zhangwenli.web.entity.Schoolmate;
import org.zhangwenli.web.entity.User;
import org.zhangwenli.web.service.SchoolmateService;
import org.zhangwenli.web.util.Page;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;
import java.util.Objects;

@Api(tags = "校友管理")
@RestController
@RequestMapping("/api/schoolmate")
public class SchoolmateController {

    private SchoolmateService schoolmateService;

    @Autowired
    public SchoolmateController(SchoolmateService schoolmateService) {
        this.schoolmateService = schoolmateService;
    }

    @ApiOperation("新增校友")
    @RequestMapping(path = "/add", method = RequestMethod.POST)
    public ResponseEntity addOne(@RequestBody Schoolmate schoolmate,
                                 @ApiIgnore @SessionAttribute(name = "user", required = false) User user) {
        this.checkPermission(user);
        this.schoolmateService.addOne(schoolmate);
        return ResponseEntity.ok("新增校友成功");
    }

    @ApiOperation("删除校友")
    @RequestMapping(path = "/delete/{id}", method = RequestMethod.POST)
    public ResponseEntity deleteOne(@PathVariable("id") String id,
                                    @ApiIgnore @SessionAttribute(name = "user", required = false) User user) {
        this.checkPermission(user);
        this.schoolmateService.deleteOneById(id);
        return ResponseEntity.ok("删除校友成功");
    }

    @ApiOperation("修改校友信息")
    @RequestMapping(path = "/update/{id}", method = RequestMethod.POST)
    public ResponseEntity deleteOne(@PathVariable("id") String id,
                                    @RequestBody Schoolmate schoolmate,
                                    @ApiIgnore @SessionAttribute(name = "user", required = false) User user) {
        this.checkPermission(user);
        this.schoolmateService.updateOneById(id, schoolmate);
        return ResponseEntity.ok("修改校友信息成功");
    }

    @ApiOperation("查询校友列表")
    @RequestMapping(path = "/list", method = RequestMethod.GET)
    public ResponseEntity findOne(@RequestParam(name = "page", defaultValue = "1") Integer page,
                                  @RequestParam(name = "size", defaultValue = "10") Integer size,
                                  @RequestParam(name = "name", required = false) String name) {
        Schoolmate schoolmate = new Schoolmate();
        schoolmate.setName(name);
        Page p = this.schoolmateService.list(page, size, schoolmate);
        return ResponseEntity.ok(p);
    }

    private void checkPermission(User user) {
        if (Objects.isNull(user)) {
            throw new RuntimeException("需要用户登陆后操作！");
        }
        if (!Objects.equals(user.getRole(), "administrator")) {
            throw new RuntimeException("当前用户无权进行此操作！");
        }
    }

}
