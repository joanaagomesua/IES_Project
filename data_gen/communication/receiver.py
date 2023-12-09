import pika

class Receiver():
    def __init__(self):
        self.queue='eventos'
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

    def recv(self):
        def callback(ch, method, properties, body):
            print(f"Received message: {body.decode('utf-8')}")

        self.channel.basic_consume(queue=self.queue, on_message_callback=callback, auto_ack=True)

        print('Consumer thread waiting for messages...')
        try:
            self.channel.start_consuming()
        except KeyboardInterrupt:
            print('Consumer thread interrupted. Stopping...')
            self.channel.stop_consuming()
            self.connclose()
