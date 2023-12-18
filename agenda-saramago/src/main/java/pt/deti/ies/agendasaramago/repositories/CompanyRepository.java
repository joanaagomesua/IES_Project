package pt.deti.ies.agendasaramago.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import pt.deti.ies.agendasaramago.models.Company;


public interface CompanyRepository extends JpaRepository<Company, Integer> {
    public Optional<Company> findByName(String name);
    public List<Company> findByCategory(String category);
    //@Query("SELECT e.name, e.description FROM Event e JOIN Company c ON e.company = c.name WHERE c.name = :companyName")
    //public List<Event> findAllEventsFromCompany(@Param("companyName") String companyName);


}

