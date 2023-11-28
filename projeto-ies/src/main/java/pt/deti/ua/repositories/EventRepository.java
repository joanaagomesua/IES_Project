package pt.deti.ua.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pt.deti.ua.models.Event;
import java.util.List;

public interface EventRepository extends MongoRepository<Event, Long> {
    public Event findByEventId(Long id);
    public List<Event> findByTags(String tag);
    public List<Event> findByCity(String city);
    public List<Event> findByCompany(String company);
    public List<Event> findByDate(String date);
}