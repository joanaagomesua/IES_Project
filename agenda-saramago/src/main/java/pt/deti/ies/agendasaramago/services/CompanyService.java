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

    public Company getCompanyById(int companyId) {
        Optional<Company> companyOptional = companyRepository.findById(companyId);
        return companyOptional.orElse(null);
    }

    public Company getCompanyByName(String companyName) {
        Optional<Company> companyOptional = companyRepository.findByName(companyName);
        return companyOptional.orElse(null);
    }

    public List<Company> getAllEvents() {
        return companyRepository.findAll();
    }

    public Company saveCompany(Company company) {
        return companyRepository.save(company);
    }

}