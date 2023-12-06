import org.springframework.stereotype.Repository;

import pt.deti.ua.models.Company;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface CompanyRepository extends JpaRepository<Company, String> {
    public Company findByName(String name);
    public List<Company> findByType(String type);

}
