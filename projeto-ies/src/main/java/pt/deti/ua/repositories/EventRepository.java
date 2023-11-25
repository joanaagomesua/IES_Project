package pt.deti.ua.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pt.deti.ua.models.Event;
import java.util.List;

public interface EventRepository extends MongoRepository<Event, Long> {
    public Event findById(Long id);
    public List<Event> findByTag(String tag);
    public List<Event> findByCity(String city);
    public List<Event> findByCompany(String Company);
}