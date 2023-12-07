package pt.deti.ies.agendasaramago.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import pt.deti.ies.agendasaramago.models.Company;
import pt.deti.ies.agendasaramago.models.Event;


public interface CompanyRepository extends JpaRepository<Company, String> {
    public Optional<Company> findByName(String name);
    public List<Company> findByType(String type);
    @Query("SELECT e.name, e.description FROM Event e JOIN Company c ON e.company = c.name WHERE c.name = :companyName")
    public List<Event> findAllEventsFromCompany(@Param("companyName") String companyName);
}

