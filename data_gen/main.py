from time import sleep
import sys
import requests
import json

from simulator import *
# MONGO_HOST = "mongodb"
# MONGO_PORT = 27017
API_URL_EVENT = "localhost:/api/event"
API_URL_COMPANY = "api/company"


def main(limit):
    
    simulatorCompany = Company_Simulator()
    
    simulatorEvent = Event_Simulator()
    
    if limit:
        limit = int(limit)
    else:
        limit = 0
        
    headers = {
        "Content-Type": "application/json"
    }
    
    # receiver = Receiver()
    # sender = Sender()

    consumer_thread = Thread(target=receiver.recv, args=(simulator,))
    consumer_thread.start()
    
    # Companies
    messages = simulatorCompany.run()
    print(messages)
    json_data = json.dumps(messages)
    requests.post(API_URL_COMPANY, data=json_data, headers=headers)

    
    counter = 0
    # Events loop
    while(limit == 0 or counter < limit):
        counter += 1
        messages = simulatorEvent.run()
        json_data = json.dumps(messages)
        requests.post(API_URL_EVENT, data=json_data, headers=headers)
        print(messages)
        
        # for m in messages:
        #     sender.send(m)

        sleep(1)

if __name__ == '__main__':
    if len(sys.argv) == 1:
        main(None)
    main(sys.argv[1])