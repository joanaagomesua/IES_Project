package pt.deti.ies.agendasaramago.services;

import pt.deti.ies.agendasaramago.repositories.UserPreferencesRepository;
import pt.deti.ies.agendasaramago.models.UserPreferences;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserPreferencesService {
    @Autowired
    private UserPreferencesRepository userprefRepository;

    public UserPreferences savePreference(UserPreferences userpref) {
        return userprefRepository.save(userpref);
    }

    public List<UserPreferences> getAllPreferences(int id) {
        return userprefRepository.findAllPrefFromUser(id);
    }

    public UserPreferences updatePreferences(UserPreferences userpref) {
        Optional<UserPreferences> prefToUpdateOptional = userprefRepository.findById((int) userpref.getId());
        if (prefToUpdateOptional.isPresent()) {
            UserPreferences pref_to_update = prefToUpdateOptional.get();
            pref_to_update.setCities(userpref.getCities());
            pref_to_update.setTags(userpref.getTags());
            pref_to_update.setCompanies(userpref.getCompanies());
            return userprefRepository.save(pref_to_update);
        } else {
            return null;
        }
    }
}
