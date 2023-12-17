package pt.deti.ies.agendasaramago.models;

import javax.persistence.OneToOne;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;

import java.util.*;

@Entity
@Table(name="user_preferences")
public class UserPreferences{
    @Id
    @Column(name="user_id")
    private int id;
    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name="preferred_cities")
    private String cities;

    @Column(name="followed_tags")
    private String tags;

    @Column(name="followed_companies")
    private String companies;

}

