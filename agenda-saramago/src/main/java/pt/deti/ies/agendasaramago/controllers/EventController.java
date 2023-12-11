package pt.deti.ies.agendasaramago.controllers;

import pt.deti.ies.agendasaramago.models.Event;
import pt.deti.ies.agendasaramago.services.EventService;

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
import org.json.JSONObject;

import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping("/{id}")
    ResponseEntity<Event> getEventByID(@PathVariable(value = "id") int id){
        return ResponseEntity.ok().body(eventService.getEventById(id));
    }

    @GetMapping("/tags/{tags}")
    ResponseEntity <List<Event>> getEventsByTags(@PathVariable(value = "tags") String tags){
        return ResponseEntity.ok().body(eventService.getEventByTags(tags));
    }

    //PUT METHODS -----> not needed, adiantado
    //create new event
    @PostMapping("")
    ResponseEntity<Event>createEvent(@RequestBody Event event){
        return ResponseEntity.ok().body(eventService.saveEvent(event));
    }

    //update and event
    @PutMapping("/{id}/update")
    ResponseEntity<Event> updateEventInfo(@PathVariable("id") int id, @RequestBody Event eventInfo) {
        return ResponseEntity.ok().body(eventService.updateEvent(eventInfo));
    }
}
