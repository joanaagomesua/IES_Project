package pt.deti.ies.agendasaramago.controllers;

import pt.deti.ies.agendasaramago.exceptions.TicketsNotAvailableException;
import pt.deti.ies.agendasaramago.models.Ticket;
import pt.deti.ies.agendasaramago.models.User;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import pt.deti.ies.agendasaramago.services.TicketService;
import pt.deti.ies.agendasaramago.services.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.json.JSONObject;

import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    @Autowired
    private TicketService ticketService;


    @GetMapping("/{user}")
    public ResponseEntity<List<Ticket>> getTicketsByLoggedInUser(@PathVariable(value = "user") Integer user) {
        List<Ticket> userTickets = ticketService.getTicketsByUserId(user);

        return ResponseEntity.ok().body(userTickets);
    }


    @PostMapping("/buy")
    public ResponseEntity<List<Ticket>> buyTickets(
            @RequestBody List<Ticket> tickets,
            @RequestParam int availableSeats,
            @RequestParam int nonAvailableSeats) {
        try {
            List<Ticket> purchasedTickets = ticketService.buyTickets(tickets, availableSeats, nonAvailableSeats);
            return ResponseEntity.ok().body(purchasedTickets);
        } catch (TicketsNotAvailableException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Collections.emptyList());
        }
    }
        
    
}