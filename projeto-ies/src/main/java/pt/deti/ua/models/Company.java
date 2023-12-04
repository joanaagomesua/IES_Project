package pt.deti.ua.models;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import java. util.*;

public class Company {

    private String name;
    private String type;

    public Company() {}

    public Company(String name, String type) {
        this.name = name;
        this.type = type;
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

    @Override
    public String toString() {
        return String.format("Company {'name': '%s', 'Type': %s }", this.name, this.type;
    }
}
