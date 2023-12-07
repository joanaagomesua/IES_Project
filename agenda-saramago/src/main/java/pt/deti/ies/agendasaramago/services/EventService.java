package pt.deti.ies.agendasaramago.services;

import pt.deti.ies.agendasaramago.repositories.EventRepository;
import pt.deti.ies.agendasaramago.models.Event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public Event saveEvent(Event event) {
        return eventRepository.save(event);
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    //fazer handle das exceptions depois ---> esta primeira é só para não dar erros enquanto não criarmos as classes de exceptions
    public Event getEventById(long id) {
        Optional<Event> optionalEvent = eventRepository.findById(id);
        return optionalEvent.orElse(null);
    }

    public List<Event> getEventByTag(String tag){
        return eventRepository.findByTag(tag);
    }

    public List<Event> getEventByCity(String city) {
        return eventRepository.findByCity(city);
    }

    public List<Event> getEventByCompany(String company) {
        return eventRepository.findByCompany(company);
    }

    public List<Event> getEventByDate(Date date) {
        return eventRepository.findByDate(date);
    }

    public Event updateEvent(Event event) {
        Optional<Event> eventToUpdateOptional = eventRepository.findById((long) event.getId());
        if (eventToUpdateOptional.isPresent()) {
            Event event_to_update = eventToUpdateOptional.get();
            event_to_update.setName(event.getName());
            event_to_update.setCompany(event.getCompany());
            event_to_update.setDescription(event.getDescription());
            event_to_update.setTags(event.getTags());
            event_to_update.setDate_start(event.getDate_start());
            event_to_update.setSchedule(event.getSchedule());
            event_to_update.setPoster(event.getPoster());
            event_to_update.setPrices(event.getPrices());
            event_to_update.setLocation(event.getLocation());
            event_to_update.setCity(event.getCity());

            return eventRepository.save(event_to_update);
        } else {
            return null;
        }
    }
}
