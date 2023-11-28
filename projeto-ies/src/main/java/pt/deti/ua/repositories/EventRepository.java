package pt.deti.ua.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import pt.deti.ua.models.Event;

import java.util.List;
import java.util.Date;


public interface EventRepository extends MongoRepository<Event, Long> { //add other methods later
    public List<Event> findByTags(String tag);
    public List<Event> findByCity(String city);
    public List<Event> findByCompany(String company);
    public List<Event> findByDate(Date date); //ideia é selecionar a data através de um calendário, that's why im using Date type
}