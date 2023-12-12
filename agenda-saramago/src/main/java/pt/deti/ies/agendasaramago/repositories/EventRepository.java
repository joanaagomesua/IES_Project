package pt.deti.ies.agendasaramago.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pt.deti.ies.agendasaramago.models.Event;
import pt.deti.ies.agendasaramago.models.Company;

import java.util.List;
import java.util.Date;


public interface EventRepository extends JpaRepository<Event, Integer> { //add other methods later
    public List<Event> findByTags(String tags);
    public List<Event> findByCity(String city);
    public List<Event> findByCompany(Company company);
    public List<Event> findByDatestart(Date datestart); //ideia é selecionar a data através de um calendário, that's why im using Date type
}
