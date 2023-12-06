import pika

class Receiver():
    def __init__(self):
        self.queue = 'eventos'
        self.connection()
    
    def __exit__(self):
        self.connectionclose()
    
    def connection(self):
        self.connection = pika.BlockingConnection(pika.ConnectionParameters('agendasaramago_rabbitmq', 5672))
        self.channel = self.connection.channel()
        self.channel.queue_declare(queue=self.queue)
    
    def connectionclose(self):
        self.connection.close()
    
    def recv(self):
        self.channel.basic_consume(queue=self.queue, on_message_callback=self.callback, auto_ack=True)

        print('Consumer thread waiting for messages...')
        try:
            self.channel.start_consuming()
        except KeyboardInterrupt:
            print('Consumer thread interrupted. Stopping...')
            self.channel.stop_consuming()
            self.connectionclose()
    
    def callback(self, ch, method, properties, body):
        print(f"Received message: {body.decode('utf-8')}")
