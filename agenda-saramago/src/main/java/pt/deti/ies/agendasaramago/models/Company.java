package pt.deti.ies.agendasaramago.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

import org.springframework.data.annotation.Id;
import java. util.*;

@Entity
@Table(name="Company")
public class Company {
    @Id
    @Column("comp_name")
    private String name;
    @Column("comp_img")
    private String image;
    @Column("comp_type")
    private String type;
    @Column("comp_bio")
    private String bio;

    public Company() {}

    public Company(String name, String image,String type, String bio) {
        this.name = name;
        this.image = image;
        this.type = type;
        this.bio = bio;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Company{" +
                "name='" + this.name + '\'' +
                ", image='" + this.image + '\'' +
                ", type='" + this.type + '\'' +
                ", bio='" + this.bio + '\'' +
                '}';
    }


