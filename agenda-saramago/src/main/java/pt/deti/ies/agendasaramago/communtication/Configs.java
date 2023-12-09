package pt.deti.ies.agendasaramago.communication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.amqp.core.Queue;

@Configuration
public class Configs {
    public static final String RECV_QUEUE = "data_gen";

    public static final String SEND_EXCHANGE = "";
    public static final String SEND_QUEUE = "backend";
    public static final String SEND_ROUTING_KEY = "backend";

    @Bean Queue recv_queue() {
        return new Queue(RECV_QUEUE, false);
    }

    @Bean Queue send_queue() {
        return new Queue(SEND_QUEUE, false);
    }
}