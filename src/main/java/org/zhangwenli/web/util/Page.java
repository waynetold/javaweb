package org.zhangwenli.web.util;

import java.util.List;

public class Page<T> {

    private Integer count;

    private List<T> list;

    public Page(Integer count, List<T> list) {
        this.count = count;
        this.list = list;
    }

    public Integer getCount() {
        return count;
    }

    public List<T> getList() {
        return list;
    }
}
