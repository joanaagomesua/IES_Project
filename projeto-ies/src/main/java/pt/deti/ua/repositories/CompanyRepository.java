import org.springframework.stereotype.Repository;

import pt.deti.ua.models.Company;
import org.springframework.stereotype.Repository;

public interface CompanyRepository extends MongoRepository<Company, Long> {
    public List<Company> findByType(String type);

}
