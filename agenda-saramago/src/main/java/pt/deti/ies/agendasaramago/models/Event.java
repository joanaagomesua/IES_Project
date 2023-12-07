package pt.deti.ies.agendasaramago.models;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.HashMap;
import java.util.ArrayList;
import java.time.format.DateTimeFormatter;
import java.time.ZonedDateTime;
import java.time.ZoneId;


@Table(name= "Event")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;
    @Column
    private String name;
    @Column
    private String company;
    @Column
    private String description;
    @Column
    private String tags;
    @Column
    private Date date_start;
    @Column
    private Date date_end;
    @Column
    private String schedule;
    @Column
    private String poster; //exemplo : "uploads/1.png"
    @Column
    private String prices;
    @Column
    private String location;
    @Column
    private String city;

    public Event() {}

    public Event(int id, String name, String company, String description, String tags, Date date_start, Date date_end, String schedule, String poster, String prices, String location, String city){
        this.id = id;
        this.name = name;
        this.company = company;
        this.description = description;
        this.tags = tags;
        this.date_start = date_start;
        this.date_end = date_end;
        this.schedule = schedule;
        this.poster = poster;
        this.prices = prices;
        this.location = location;
        this.city = city;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int getId() {
        return this.id;
    } 

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public Date getDate_start() {
        return date_start;
    }

    public void setDate_start(Date date_start) {
        this.date_start = date_start;
    }

    public void setDate_end(Date date_end) {
        this.date_end = date_end;}

    public String getSchedule() {
        return schedule;
    }

    public void setSchedule(String schedule) {
        this.schedule = schedule;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public String getPrices() {
        return prices;
    }

    public void setPrices(String prices) {
        this.prices = prices;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCity() {
        return city;
    }

    private String escapeString(String input) {
        return input != null ? input.replace("'", "\\'") : "null";
    }

    @Override
    public String toString() {
        return "Event{" +
                "id=" + this.id +
                ", name='" + this.name + '\'' +
                ", company='" + this.company + '\'' +
                ", description='" + this.description + '\'' +
                ", tags='" + this.tags + '\'' +
                ", date_start=" + this.date_start +
                ", date_end=" + this.date_end +
                ", schedule='" + this.schedule + '\'' +
                ", poster='" + this.poster + '\'' +
                ", prices='" + this.prices + '\'' +
                ", location='" + this.location + '\'' +
                ", city='" + this.city + '\'' +
                '}';
    }

}