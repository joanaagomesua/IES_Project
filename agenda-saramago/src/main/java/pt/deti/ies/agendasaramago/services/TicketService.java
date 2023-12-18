package pt.deti.ies.agendasaramago.services;

import pt.deti.ies.agendasaramago.repositories.TicketRepository;
import pt.deti.ies.agendasaramago.exceptions.TicketsNotAvailableException;
import pt.deti.ies.agendasaramago.models.Event;
import pt.deti.ies.agendasaramago.models.Ticket;
import pt.deti.ies.agendasaramago.models.User;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    public List<Ticket> getTicketsByUserId(Integer userId) {
        Optional<List<Ticket>> optionalTickets = Optional.ofNullable(ticketRepository.findByUser_Id(userId));
        return optionalTickets.orElse(null);
    }

    public List<Ticket> buyTickets(List<Ticket> tickets, int availableSeats, int nonAvailableSeats) {
        if (nonAvailableSeats < tickets.size() || availableSeats <= 0) {
            throw new TicketsNotAvailableException("Tickets not available. Choose another event");
        }
        return ticketRepository.saveAll(tickets);
    }


}