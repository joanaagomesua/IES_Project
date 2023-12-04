from threading import Thread
from time import sleep

from simulator import *
from communication import *

MONGO_HOST = "mongodb"
MONGO_PORT = 27017

def main():
    simulator = Event_Simulator(MONGO_HOST, MONGO_PORT)
    # receiver = Receiver()
    # sender = Sender()

    # consumer_thread = Thread(target=receiver.recv, args=(simulator,))
    # consumer_thread.start()
    
    while(True):
        messages = simulator.run()
        print(messages)
        # for m in messages:
        #     sender.send(m)

        sleep(10)

if __name__ == '__main__':
    main()