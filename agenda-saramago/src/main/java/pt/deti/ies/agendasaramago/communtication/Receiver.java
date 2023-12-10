package pt.deti.ies.agendasaramago.communication;

import pt.deti.ies.agendasaramago.exceptions.ResourceNotFoundException;
import org.json.JSONObject;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import pt.deti.ies.agendasaramago.models.Company;
import pt.deti.ies.agendasaramago.services.CompanyService;
import pt.deti.ies.agendasaramago.models.NotifNewEvent;
import pt.deti.ies.agendasaramago.models.Event;
import pt.deti.ies.agendasaramago.services.EventService;

import pt.deti.ies.agendasaramago.communication.Configs;

@Service
public class Receiver {
    @Autowired private EventService eventService;
    @Autowired private CompanyService companyService;

    @RabbitListener(queues = Configs.RECV_QUEUE)
    public void receiveMessage(String message) throws ResourceNotFoundException {
        JSONObject jsonMessage = new JSONObject(message);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

        String type = jsonMessage.getString("type");

        switch (type) {
            case "event_created":
                Event event = new Event();
                NotifNewEvent notif = new NotifNewEvent(

                );

                event.setName(jsonMessage.getString("name"));
                event.setCompany(jsonMessage.getString("company"));
                event.setDescription(jsonMessage.getString("description"));
                event.setTags(jsonMessage.getString("tags"));
                try {
                    Date data_inicio = sdf.parse(jsonMessage.getString("data_inicio"));
                    event.setDatestart(data_inicio);
                } catch (ParseException e) {
                    e.printStackTrace();
                }
                try {
                    Date data_fim = sdf.parse(jsonMessage.getString("data_fim"));
                    event.setDateend(data_fim);
                } catch (ParseException e) {
                    e.printStackTrace();
                }
                event.setSchedule(jsonMessage.getString("schedule"));
                event.setPoster(jsonMessage.getString("poster"));
                event.setPrices(jsonMessage.getString("prices"));
                event.setLocation(jsonMessage.getString("location"));
                event.setCity(jsonMessage.getString("city"));
                eventService.saveEvent(event);
                break;

            case "company_created":
                Company company = new Company();
                company.setName(jsonMessage.getString("name"));
                company.setCategory(jsonMessage.getString("category"));
                companyService.saveCompany(company);
                break;
            default:
                System.err.println("Couldn't read message type.");
                break;
        }
    }
}