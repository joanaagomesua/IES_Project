class Event (object):
    def __init__(self, name, company, description, tags, data_inicio, data_fim, schedule, poster, prices, location, xy_location, duration):
        self.name = name
        self.company = company
        self.description = description
        self.tags = tags #list
        self.data_inicio = data_inicio
        self.data_fim = data_fim
        self.schedule = schedule #string
        self.poster = poster # string
        # children, adults, seniors, students, family
        self.prices = prices #hashmap
        self.location = location # list x,y
        self.xy_location = xy_location
        self.duration = duration 
    
    def __str__(self):
        return 'Event: %s'.format(self.name)
    
    def toDic(self):
        return {
            'name': self.name,
            'company': self.company.name,
            'description': self.description,
            'tags': self.tags,
            'data_inicio': self.data_inicio,
            'data_fim': self.data_fim,
            'schedule': self.schedule,
            'poster': self.poster,
            'prices': self.prices,
            'location': self.location,
            'xy_location': self.xy_location,
            'duration': self.duration
        }
    
    