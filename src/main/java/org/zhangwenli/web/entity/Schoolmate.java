package org.zhangwenli.web.entity;

import java.time.Instant;

public class Schoolmate {

    private String id;


    private Instant created;

    private Instant updated;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public Instant getCreated() {
        return created;
    }

    public void setCreated(Instant created) {
        this.created = created;
    }

    public Instant getUpdated() {
        return updated;
    }

    public void setUpdated(Instant updated) {
        this.updated = updated;
    }


}
