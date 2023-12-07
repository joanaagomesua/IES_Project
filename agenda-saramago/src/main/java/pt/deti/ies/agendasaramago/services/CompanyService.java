package pt.deti.ies.agendasaramago.services;

import pt.deti.ies.agendasaramago.repositories.CompanyRepository;
import pt.deti.ies.agendasaramago.repositories.EventRepository;
import pt.deti.ies.agendasaramago.models.Company;
import pt.deti.ies.agendasaramago.models.Event;

import java.util.List;
import java.util.Optional;

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
        return companyRepository.findAll();
    }

    public Company saveCompany(Company company) {
        return companyRepository.save(company);
    }

    public Company updateCompany(Company company) {
        Optional<Company> companyToUpdateOptional = companyRepository.findByName(company.getName());
        if (companyToUpdateOptional.isPresent()) {
            Company company_to_update = companyToUpdateOptional.get();
            company_to_update.setName(company.getName());
            company_to_update.setType(company.getType());
            return companyRepository.save(company_to_update);
        } else {
            return null;
        }
    }

    // public List<Event> getAllEventsFromCompany(String name){

    // }



}