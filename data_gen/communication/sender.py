import pika
import json

class Sender():
    def __init__(self):
        self.rabbitmq_host = 'localhost'
        self.rabbitmq_port = 5672
        self.rabbitmq_username = 'guest'
        self.rabbitmq_password = 'guest'
        self.exchange = '' 
        self.queue = 'new_event'
        self.routing_key = 'new_event'
        self.channel = None
        self.connection_instance = None  # Renomeado para evitar conflito de nomes
        self.connection()

    def __enter__(self):
        return self
    
    def __exit__(self, exc_type, exc_value, traceback):
        self.connectionclose()

    def connection(self):
        credentials = pika.PlainCredentials(self.rabbitmq_username, self.rabbitmq_password)
        self.connection_instance = pika.BlockingConnection(pika.ConnectionParameters(host=self.rabbitmq_host, port=self.rabbitmq_port, credentials=credentials))
        self.channel = self.connection_instance.channel()
        self.channel.queue_declare(queue=self.queue, durable=False)
    
    def connectionclose(self):
        if self.connection_instance:
            self.connection_instance.close()
    
    def send(self, msg):        
        message = json.dumps(msg)
        self.channel.basic_publish(exchange=self.exchange, routing_key=self.routing_key, body=message)
        print(f'Message sent: {message}')

