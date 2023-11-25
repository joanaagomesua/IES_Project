package pt.deti.ua.models;

import org.springframework.data.annotation.Id;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Event")
public class Event {
    @Id
    private long id;
    private String name;
    private String company;
    private String description;
    private Date starting_date_of_event;
    private Date ending_date_of_event;
    private String schedule;
    private String poster;
    private List<Float> prices;
    private HashMap<Float, Float> location;

    public Event(long id, String name, String company, String description, Date starting_date_of_event, Date ending_date_of_event, String schedule, String poster, List<Float> prices, HashMap<Float,Float> location){
        this.id = id;
        this.name = name;
        this.company = company;
        this.description = description;
        this.starting_date_of_event = starting_date_of_event;
        this.ending_date_of_event = ending_date_of_event;
        this.schedule = schedule;
        this.poster = poster;
        this.prices = prices;
        this.location = location;
    }

    public Event(long id, String name, String company, String description, Date starting_date_of_event, String schedule, String poster, List<Float> prices, HashMap<Float,Float> location){
        this.id = id;
        this.name = name;
        this.company = company;
        this.description = description;
        this.starting_date_of_event = starting_date_of_event;
        this.schedule = schedule;
        this.poster = poster;
        this.prices = prices;
        this.location = location;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName(String name) {
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

    public Date getStarting_date_of_event() {
        return starting_date_of_event;
    }

    public void setStarting_date_of_event(Date starting_date_of_event) {
        this.starting_date_of_event = starting_date_of_event;
    }

    public Date getEnding_date_of_event() {
        return ending_date_of_event;
    }

    public void setEnding_date_of_event(Date ending_date_of_event) {
        this.ending_date_of_event = ending_date_of_event;
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

    public List<Float> getPrices() {
        return prices;
    }

    public void setPrices(List<Float> prices) {
        this.prices = prices;
    }

    public HashMap<Float, Float> getLocation() {
        return location;
    }

    public void setLocation(HashMap<Float, Float> location) {
        this.location = location;
    }

    private String escapeString(String input) {
        return input != null ? input.replace("'", "\\'") : "null";
    }

    @Override
    public String toString() {
        String starting_date_string = this.starting_date_of_event;
        String ending_date_string = this.ending_date_of_event != null ? this.ending_date_of_event.toString() : "null";
        String prices_string = this.prices != null ? this.prices.toString() : "null";
        String location_string = this.location;

        String result = String.format("Event {'id': %d, 'name': '%s', 'company': '%s', 'description': '%s', 'starting_date_of_event': %s, 'ending_date_of_event': %s, 'schedule': '%s', 'poster': '%s', 'prices': %s, 'location': %s}",
                this.id, escapeString(this.name), escapeString(this.company), escapeString(this.description),
                starting_date_string, ending_date_string, this.schedule, escapeString(this.poster), prices_string, location_string);

        return result;
    }

}
