package pt.deti.ua.models;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.HashMap;
import java.util.ArrayList;
import java.time.format.DateTimeFormatter;
import java.time.ZonedDateTime;
import java.time.ZoneId;


@Table("Event")
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

    public void setId(long id) {
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

    public Date getDate_start() {
        return date_start;
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

    //still need to fix this toString(), not correct
    @Override
    public String toString() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String startingDate = formatter.format(this.date_event.get(0).toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime());
        String endingDate = this.date_event.size() > 1 ? formatter.format(this.date_event.get(1).toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime()) : "null";
        String prices_string = this.prices != null ? this.prices.toString() : "null";
        String location_string = this.location.toString();

        return String.format("Event {'id': %d, 'name': '%s', 'company': '%s', 'description': '%s', 'starting_date_of_event': %s, 'ending_date_of_event': %s, 'schedule': '%s', 'poster': '%s', 'prices': %s, 'location': %s, 'city': %s}",
                this.id, escapeString(this.name), escapeString(this.company), escapeString(this.description),
                startingDate, endingDate, this.schedule, escapeString(this.poster), prices_string, location_string, this.city);
    }

}
