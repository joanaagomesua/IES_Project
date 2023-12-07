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
    @Column
    private String name;
    @Column
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
        return String.format("Company {'name': '%s', 'Type': %s }", this.name, this.type);
    }
}