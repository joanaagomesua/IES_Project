from pymongo import MongoClient
import json
from simulator import Event, Company
from faker import Faker
import random


TAGS_JSON = "data/tags.json"
DESC_JSON = "data/desc.json"

class Event_Simulator():
    def __init__(self, host, port):
        self.host = host
        self.port = port

        # try:
        #     connstr = 'mongodb://' + self.host + ':' + str(self.port) + '/'
        #     self.client = MongoClient(connstr)
        # except:
        #     print('Connection to mongo container failed. Exiting.')
        #     exit(1)

        # self.db = self.client['------']
        
        
        # # Buscando as companies da base de dados
        # company_data = [a for a in self.db['company'].find()]
        
        self.companies = []
        # for company in company_data:
        #     name = company['name']
        #     self.companies.append(Company(id, name))
            
        self.companies.append(Company('Dance company', ['Dança']))
        self.companies.append(Company('Theater company', ['Teatro']))
        self.companies.append(Company('Music company', ['Música']))
        self.companies.append(Company('Literature company', ['Leitura e Literatura']))
        self.companies.append(Company('Art company', ['Artes Visuais']))
        self.companies.append(Company('Cinema company', ['Cinema e Vídeo']))
        self.companies.append(Company('Gastronomy company', ['Gastronomia']))
        self.companies.append(Company('Profissional Development company', ['Carreira e Desenvolvimento Profissional']))
        self.companies.append(Company('Education company', ['Educação e Aprendizado']))
        self.companies.append(Company('Culture company', ['Cultura e Lazer']))
        
        
    def create_event(self):
        
        # choose company
        company = random.choice(self.companies)
        
        # gerar a categoria e tags
        tags = self.loadfile(TAGS_JSON)
        category = random.choice(company.categories)
        num_tags = random.randint(1, 3)
        tags = [category] + random.sample(tags[category], k=num_tags)
        
        # nome evento
        name = random.choice(tags) + " by " + Faker().name()
        
        description = " "
        # gerar a descrição
        descs = self.loadfile(DESC_JSON)
        description = descs[category]
        
        
        # gerar a data
        num = random.random()
        if num <= 0.1:
            r = range(2)
        else:
            r = range(1)
            
        data = []
        for i in r:
            data.append(Faker().date_time_between(start_date='now', end_date='+30d'))
        
        data_time = sorted(data)
        data_inicio = data_time[0].date()
        if len(data) > 1:
            data_fim = data_time[1].date()
            data = [data_inicio, data_fim]
        else:
            data = [data_inicio]
        

        # schedule
        schedule = data_time[0].time().strftime("%H:%M")
        
        prices = {"children": 0, "adults": 0, "seniors": 0, "students": 0, "family": 0}
        for key in prices:
            prices[key] = random.randint(0, 10)
        
        if len(data) > 1:
            duration = (data_fim - data_inicio).days
        else:
            duration = random.randint(3, 18)
            duration = duration * 10
            
            
        # location   
        location = Faker().address()
        xy_location = [random.uniform(-180, 180), random.uniform(-90, 90)]
        
        poster_dic = {"Dança": "img/dance.jpg", "Teatro": "img/teatro.jpg", "Música": "img/musica.jpg", "Leitura e Literatura": "img/leitura.jpg", "Artes Visuais": "img/artes.jpg", "Cinema e Vídeo": "img/cinema.jpg", "Gastronomia": "img/gastronomia.jpg", "Carreira e Desenvolvimento Profissional": "img/carreira.jpg", "Educação e Aprendizado": "img/educacao.png", "Cultura e Lazer": "img/lazer.jpg"}
        
        poster = poster_dic[category]
        
        # print todos as entradas de evento
        # print("Name: ", name)
        # print("Company: ", company.name)
        # print("Description: ", description) 
        # print("Tags: ", tags)
        # print("Data: ", data)
        # print("Schedule: ", schedule)
        # print("Poster: ", poster)
        # print("Prices: ", prices)
        # print("Location: ", location)
        # print("XY Location: ", xy_location)
        # print("Duration: ", duration)
        
        event = Event(name, company, description, tags, data, schedule, poster, prices, location, xy_location, duration)
        print('Event simulator finished.')  
        return {'type': 'event_criated', 'event': event.toDic()}

    def run(self):
        print('Starting event simulator...')
        return self.create_event()
        
    def loadfile(self, filename):
            try:
                with open(filename, 'r') as f:
                    data = json.load(f)
            except:
                print('Error opening {} file. Exiting...'.format(filename))
                exit(1)
            
            return data
        
if __name__ == '__main__':
    es = Event_Simulator('localhost', 27017)
    es.run()
        
    
  
