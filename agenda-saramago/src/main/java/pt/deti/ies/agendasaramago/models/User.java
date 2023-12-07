package pt.deti.ies.agendasaramago.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

import java.util.*;
@Entity
@Table("users")
public class User {
    @Id
    @Column("user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column("user_name")
    private String name;
    @Column("user_username")
    private String username;
    @Column("user_birthday")
    private Date birthday;
    @Column("user_bio");
    private String bio;
    @Column("user_profile_pic");
    private String profile_pic;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getProfile_pic() {
        return profile_pic;
    }

    public void setProfile_pic(String profile_pic) {
        this.profile_pic = profile_pic;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + this.id +
                ", name='" + this.name + '\'' +
                ", username='" + this.username + '\'' +
                ", birthday=" + this.birthday +
                ", bio='" + this.bio + '\'' +
                ", profile_pic='" + this.profile_pic + '\'' +
                '}';
    }
}
