package pt.deti.ies.agendasaramago.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;

import java. util.*;

@Entity
@Table(name="Company")
public class Company {
    @Id
    @Column(name = "comp_name")
    private String name;
    @Column(name = "comp_category")
    private String category;

    public Company() {
    }

    public Company(String name, String category) {
        this.name = name;
        this.category= category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Company{" +
                "name='" + this.name + '\'' +
                ", category='" + this.category + '\'' +
                '}';
    }
}