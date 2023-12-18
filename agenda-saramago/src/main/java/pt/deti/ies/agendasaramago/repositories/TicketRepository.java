package pt.deti.ies.agendasaramago.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import pt.deti.ies.agendasaramago.models.Event;
import pt.deti.ies.agendasaramago.models.Ticket;
import pt.deti.ies.agendasaramago.models.User;
import pt.deti.ies.agendasaramago.models.Company;

import java.util.List;
import java.util.Date;


public interface TicketRepository extends JpaRepository<Ticket, Long> {
    @Query("SELECT t FROM Ticket t WHERE t.user.id = :userId")
    public List<Ticket> findByUser_Id(int user);

}
