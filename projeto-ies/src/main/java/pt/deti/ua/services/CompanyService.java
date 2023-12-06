package pt.deti.ua.services;

import pt.deti.ua.repositories.CompanyRepository;
import pt.deti.ua.models.Company;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    public Company getCompanyByName(String name){
        Optional<Company> optionalCompany = companyRepository.findByName(name);
        return optionalCompany.orElse(null);
    }

    public List<Company> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event saveCompany(Company company) {
        return companyRepository.save(company);
    }

    public Company updateCompany(Company company) {
        Optional<Comapny> companyToUpdateOptional = companyRepository.findByName(company.getName());
        if (companyToUpdateOptional.isPresent()) {
            Company company_to_update = companyToUpdateOptional.get();
            company_to_update.setName(company.getName());
            company_to_update.setType(company.getType());
            return companyRepository.save(company_to_update);
        } else {
            return null;
        }
    }



}