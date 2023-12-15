import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ticket_cards';
import dance from '../assets/images/dança.png';
import vinho from '../assets/images/vinho.jpg';
import cinema from '../assets/images/cinema.jpg';
import teatro from '../assets/images/teatro.jpg';
import livro from '../assets/images/livro.jpg';
import antiques from '../assets/images/antiques.png';
import karate from '../assets/images/karate.png';

function my_tickets() {
  const cardData = [
    { title: 'Campeonato Karaté', data: '2023-12-28T00:00:00.000+00:00', hora: '15:30', city:'Coimbra', location:'Pavilhão MultiDesportivo',price:'10', imageSrc: karate },
    { title: 'Dança Contemporanea', data:'2023-12-16T00:00:00.000+00:00', hora: '18:30', city:'Aveiro', location:'Teatro Aveirense',price:'2', imageSrc: dance},
    { title: 'Feira de Queijos e Vinhos', data:'2024-01-23T00:00:00.000+00:00', hora:'02:30', city:'Espinho', location:'Praça dos Anjos', price:'4', imageSrc: vinho},
    { title: 'Festival de Cinema', data:'2024-02-23T00:00:00.000+00:00', hora:'16:43', city:'Lisboa', location:'Praceta Eliloi',price:'9', imageSrc: cinema },
    { title: 'Festival de Teatro',data:'2024-02-27T00:00:00.000+00:00', hora:'12:12', city:'Porto', location:'Teatro Sá', price:'1', imageSrc: teatro },
    { title: 'Clube de Leitura "Entre Páginas"',data:'2024-02-27T00:00:00.000+00:00', hora:'09:00', city:'Viseu', location:'Casa da Maria', price:'0', imageSrc: livro},
    { title: 'Feira Antiguidades',data:'2024-03-02T00:00:00.000+00:00', hora:'14:30', city:'Leiria', location:'Prça Rodrigues Lobo',price:'27,5', imageSrc: antiques},
  ];

  return (
    <div className="p-10 space-y-10">
      <div className=" space-y-2">
        <p className="mt-10 mb-20 font-poppins text-[#a7c7eb] font-bold text-4xl">Os Meus Bilhetes:</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap:'20px' }}>
        {cardData.map((event, index) => (
          <Card key={index} title={event.title} data={event.data} hora={event.hora} city={event.city} location={event.location} price={event.price}/>
        ))}
      </div>
    </div>
  );
}

export default my_tickets;