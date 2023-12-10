import pika
import json

class Sender():
    def __init__(self):
        self.queue = 'datagen'
        self.connection()
    
    def __exit__(self):
        self.connectionclose()
    
    def connection(self):
        self.connection = pika.BlockingConnection(pika.ConnectionParameters('agendasaramago_rabbitmq', 5672))
        self.channel = self.connection.channel()
        self.channel.queue_declare(queue=self.queue)
    
    def connectionclose(self):
        self.connection.close()
    
    def send(self, msg):
        msg = json.dumps(msg)
        print('Sent {}'.format(msg), flush=True)
        self.channel.basic_publish(exchange='', routing_key=self.queue, body=msg)