from company_model import Company


class Company_Simulator():
    def __init__(self, host, port):
        self.host = host
        self.port = port
        
        
    def run(self):
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
        
        return {'type': 'companies_created', 'companies': self.companies}
        

            
        