package pt.deti.ua.models;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.HashMap;
import java.util.ArrayList;
import java.time.format.DateTimeFormatter;
import java.time.ZonedDateTime;
import java.time.ZoneId;


@Document("Event")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String company;
    private String description;
    private ArrayList<String> tags;
    private ArrayList<Date> date_event;
    private String schedule;
    private String poster; //?
    private HashMap<String,Float> prices;
    private ArrayList<Float> location;
    private String city;

    public Event() {}

    public Event(Long id, String name, String company, String description, ArrayList<String> tags, ArrayList<Date> date_event, String schedule, String poster, HashMap<String,Float> prices, ArrayList<Float> location, String city){
        this.id = id;
        this.name = name;
        this.company = company;
        this.description = description;
        this.tags = tags;
        this.date_event = date_event;
        this.schedule = schedule;
        this.poster = poster;
        this.prices = prices;
        this.location = location;
        this.city = city;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long getId() {
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

    public ArrayList<String> getTags() {
        return tags;
    }

    public void setTags(ArrayList<String> tags) {
        this.tags = tags;
    }

    public ArrayList<Date> getDate_event() {
        return date_event;
    }

    public void setDate_event(ArrayList<Date> date_event) {
        this.date_event = date_event;
    }

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

    public HashMap<String, Float> getPrices() {
        return prices;
    }

    public void setPrices(HashMap<String,Float> prices) {
        this.prices = prices;
    }

    public ArrayList<Float> getLocation() {
        return location;
    }

    public void setLocation(ArrayList<Float> location) {
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
