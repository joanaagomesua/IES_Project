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
    private UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User getUserById(int id) {
        Optional<User> optionalUser = userRepository.findById(id);
        return optionalUser.orElse(null);
    }

    public User updateUser(User user) {
        Optional<User> userToUpdateOptional = userRepository.findById((int) user.getId());
        if (userToUpdateOptional.isPresent()) {
            User user_to_update = userToUpdateOptional.get();
            user_to_update.setUsername(user.getUsername());
            user_to_update.setEmail(user.getEmail());
            user_to_update.setPassword(user.getPassword());
            user_to_update.setBirthday(user.getBirthday());
            user_to_update.setName(user.getName());
            user_to_update.setBio(user.getBio());
            user_to_update.setProfile_pic(user.getProfile_pic());
            return userRepository.save(user_to_update);
        } else {
            return null;
        }
    }

}