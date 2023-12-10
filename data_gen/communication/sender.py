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
        self.connection()

    
    def __exit__(self):
        self.connectionclose()
    
    def connection(self):
        credentials = pika.PlainCredentials(self.rabbitmq_username, self.rabbitmq_password)
        connection = pika.BlockingConnection(pika.ConnectionParameters(host=self.rabbitmq_host, port=self.rabbitmq_port, credentials=credentials))
        self.channel = connection.channel()
        self.channel.queue_declare(queue=self.queue, durable=False)
    
    def connectionclose(self):
        self.connection.close()
    
    def send(self, msg):
        message = json.dumps(msg)
        self.channel.basic_publish(exchange=self.exchange, routing_key=self.routing_key, body=message)
        print(f'Message sent: {message}')
