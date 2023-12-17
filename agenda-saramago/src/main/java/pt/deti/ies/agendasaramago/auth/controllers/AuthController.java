package pt.deti.ies.agendasaramago.auth.controllers;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import pt.deti.ies.agendasaramago.repositories.UserRepository;
import pt.deti.ies.agendasaramago.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import pt.deti.ies.agendasaramago.auth.security.ASPasswordEncoder;
import java.util.Optional;
import org.json.JSONObject;

@CrossOrigin
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ASPasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        user.setUsername(user.getName());
        user.setEmail(user.getEmail());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setBirthday(user.getBirthday());
        user.setName(user.getName());
        if (user.getProfile_pic() != null){
            user.setProfile_pic(user.getProfile_pic());
        }
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        Optional<String> hashedPasswordFromDatabase = userRepository.findPasswordByEmail(user.getEmail());
        Optional<User> userOptional = userRepository.findByEmail(user.getEmail());
        JSONObject jsonMessage = new JSONObject();
        if (hashedPasswordFromDatabase.isPresent() && passwordEncoder.matches(user.getPassword(), hashedPasswordFromDatabase.get())) {
            User userFromDatabase = userOptional.get();
            jsonMessage.put("status", "success");
            jsonMessage.put("user_id",userFromDatabase.getId());
        } else {
            jsonMessage.put("status", "failed");
        }
        return new ResponseEntity<>(jsonMessage.toString(), HttpStatus.OK);
    }
}
