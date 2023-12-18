package pt.deti.ies.agendasaramago.services;

import pt.deti.ies.agendasaramago.repositories.EventRepository;
import pt.deti.ies.agendasaramago.repositories.TicketRepository;
import pt.deti.ies.agendasaramago.exceptions.TicketsNotAvailableException;
import pt.deti.ies.agendasaramago.models.Event;
import pt.deti.ies.agendasaramago.models.Ticket;
import pt.deti.ies.agendasaramago.models.User;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private EventRepository eventRepository;

    public List<Ticket> getTicketsByUserId(Integer userId) {
        Optional<List<Ticket>> optionalTickets = Optional.ofNullable(ticketRepository.findByUser_Id(userId));
        return optionalTickets.orElse(null);
    }

    public Ticket buyTickets(Ticket ticket) {
        int eventId = ticket.getEvent().getId();
        int availableSeats = eventRepository.getAvailableSeatsForEvent(eventId);
        // int nonAvailableSeats = eventRepository.getNotAvailableTicketsForEvent(eventId);
        if (availableSeats-1 < 0) {
            throw new TicketsNotAvailableException("Tickets not available. Choose another event");
        }
        eventRepository.decrementAvailableSeats(eventId);
        //int seats_after2=eventRepository.setSeatsNonAvailable(nonavailableSeats+1);
        return ticketRepository.save(ticket);
    }


}