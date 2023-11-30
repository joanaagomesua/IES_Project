import json
import pika

class Sender():
    def __init__(self):
        self.queue='datagen'
        self.connection()
        self.callback()

    def __exit__(self):
        self.connectionclose()

    def connection(self):
        connection = pika.BlockingConnection(pika.ConnectionParameters('rabbitmq', 5673))
        channel = connection.channel()
        channel.queue_declare(queue=self.queue)
    
    def connectionsclose(self):
        self.connection.close()
    
    def send(self, msg):
        msg = json.dumps(msg)
        print('sent {}'.format(msg), flush=True)
        self.channel.basic_publish(exchange='', routing_key=self.queue, body=msg)