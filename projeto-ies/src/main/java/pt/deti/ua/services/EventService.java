package pt.deti.ua.services;

import pt.deti.ua.repositories.EventRepository;

import org.springframework.beans.factory.annotation.Autowired;

public class EventService {

    @Autowired
    private EventRepository eventRepository;


}