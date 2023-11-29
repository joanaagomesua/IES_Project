package pt.deti.ua;

import com.mongodb.client.*;
import com.mongodb.client.model.Filters;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import org.bson.Document;

public class  Mongo {
    private MongoCollection<Document> agendaSaramago;

    public Mongo(MongoDatabase database){
        this.agendaSaramago = database.getCollection("agendaSaramago");
    }

    public static void main( String[] args ){
        MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");
        MongoDatabase database = mongoClient.getDatabase("agendaSaramagoDB");
        Mongo mongo = new Mongo(database);

        List eventTags = new ArrayList<>();
        Document event = new Document("title", "")
                .append("description", "")
                .append("date & time", "")
                .append("tags", eventTags)
                .append("company", "");
    }
}
