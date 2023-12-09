from simulator import Company

class Company_Simulator():
    def __init__(self):
        pass
        
    def run(self):
        print('Company simulator running')
        self.companies = []
        # for company in company_data:
        #     name = company['name']
        #     self.companies.append(Company(id, name))
            
        self.companies.append(Company('Dance company', ['Dança']).toDic())
        self.companies.append(Company('Theater company', ['Teatro']).toDic())
        self.companies.append(Company('Music company', ['Música']).toDic())
        self.companies.append(Company('Literature company', ['Leitura e Literatura']).toDic())
        self.companies.append(Company('Art company', ['Artes Visuais']).toDic())
        self.companies.append(Company('Cinema company', ['Cinema e Vídeo']).toDic())
        self.companies.append(Company('Gastronomy company', ['Gastronomia']).toDic())
        self.companies.append(Company('Profissional Development company', ['Carreira e Desenvolvimento Profissional']).toDic())
        self.companies.append(Company('Education company', ['Educação e Aprendizado']).toDic())
        self.companies.append(Company('Culture company', ['Cultura e Lazer']).toDic())
        
        return {'type': 'companies_created', 'companies': self.companies}

if __name__ == '__main__':
    es = Company_Simulator()
    es.run()

            
        