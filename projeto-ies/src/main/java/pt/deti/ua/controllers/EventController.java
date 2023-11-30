package pt.deti.ua.controllers;

import pt.deti.ua.models.Event;
import pt.deti.ua.services.EventService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventService eventService;

    // GET METHODS ----> only the first one is needed for this iteration
    @GetMapping("/{id}")
    ResponseEntity<Event> getEventByID(@PathVariable(value = "id") Long id){
        return ResponseEntity.ok().body(eventService.getEventById(id));
    }

    @GetMapping("/{tag}")
    ResponseEntity <List<Event>> getEventsByTag(@PathVariable(value = "tag") String tag){
        return ResponseEntity.ok().body(eventService.getEventByTag(tag));
    }

    //PUT METHODS -----> not needed, adiantado
    //create new event
    @PostMapping("")
    ResponseEntity<Event>createEvent(@RequestBody Event event){
        return ResponseEntity.ok().body(eventService.saveEvent(event));
    }

    //update and event
    @PutMapping("/{id}/update")
    ResponseEntity<Event> updateEventInfo(@PathVariable(value = "id", @RequestBody Event EventInfo) Long id){
        return ResponseEntity.ok().body(eventService.updateEvent(EventInfo));
    }

}
