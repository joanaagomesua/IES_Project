package pt.deti.ies.agendasaramago.communication;

import org.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.amqp.rabbit.core.RabbitTemplate;

import pt.deti.ies.agendasaramago.communication.Configs;

@Service
public class Sender {
    @Autowired
    private RabbitTemplate rabbitTemplate;
    public void send(JSONObject jmsg) {
        String msg = jmsg.toString();
        rabbitTemplate.convertAndSend(Configs.SEND_EXCHANGE, Configs.SEND_ROUTING_KEY, msg);
        System.out.println("sent" + msg);
    }

}