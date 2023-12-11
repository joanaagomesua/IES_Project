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
    { title: 'Campeonato Karaté', content: 'Participa num emocionante campeonato de Karaté, onde poderás demonstrar as tuas habilidades marciais e competir com outros talentosos praticantes de Karaté.', imageSrc: karate },
    { title: 'Dança Contemporanea', content: 'Deixa-te envolver pela expressão artística da dança contemporânea. Testemunha performances únicas e inovadoras que transcendem os limites tradicionais da dança.', imageSrc: dance},
    { title: 'Feira de Queijos e Vinhos', content: 'Desfruta de uma experiência gastronómica única na Feira de Queijos e Vinhos. Descobre a combinação perfeita entre diferentes tipos de queijos e vinhos requintados.', imageSrc: vinho},
    { title: 'Festival de Cinema', content: 'Imersa-te no mundo cinematográfico através do Festival de Cinema. Desfruta de uma seleção diversificada de filmes, desde dramas a comédias.', imageSrc: cinema },
    { title: 'Festival de Teatro', content: 'Deixa-te levar pela magia do teatro no Festival de Teatro. Assiste a performances cativantes, dramáticas e divertidas.', imageSrc: teatro },
    { title: 'Clube de Leitura "Entre Páginas"', content: '"Entre Páginas" é mais do que um clube de leitura; é um refúgio para amantes da literatura.', imageSrc: livro},
    { title: 'Feira Antiguidades', content: 'Explora a história através da Feira de Antiguidades, onde cada objeto conta uma história única.', imageSrc: antiques},
  ];

  return (
    <div className="p-10 space-y-10">
      <div className=" space-y-2">
        <p className="mt-10 mb-20 font-poppins text-[#a7c7eb] font-bold text-4xl">Os Meus Bilhetes:</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap:'20px' }}>
        {cardData.map((event, index) => (
          <Card key={index} title={event.title} content={event.content} imageSrc={event.imageSrc} />
        ))}
      </div>
    </div>
  );
}

export default my_tickets;