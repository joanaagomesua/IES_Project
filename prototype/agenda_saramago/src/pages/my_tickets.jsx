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
    { title: 'Campeonato Karaté', content: 'Participa num emocionante campeonato de Karaté, onde poderás demonstrar as tuas habilidades marciais e competir com outros talentosos praticantes de Karaté. Desafia-te a alcançar a vitória e a destacar-te como um mestre nesta competição intensa.', imageSrc: karate },
    { title: 'Dança Contemporanea', content: 'Deixa-te envolver pela expressão artística da dança contemporânea. Testemunha performances únicas e inovadoras que transcendem os limites tradicionais da dança. Uma experiência cativante que combina movimento, música e criatividade.', imageSrc: dance },
    { title: 'Feira de Queijos e Vinhos', content: 'Desfruta de uma experiência gastronómica única na Feira de Queijos e Vinhos. Descobre a combinação perfeita entre diferentes tipos de queijos e vinhos requintados. Um evento para apreciadores de boa comida e bebida.', imageSrc: vinho },
    { title: 'Festival de Cinema', content: 'Imersa-te no mundo cinematográfico através do Festival de Cinema. Desfruta de uma seleção diversificada de filmes, desde dramas emocionantes a comédias hilariantes. Uma oportunidade para apreciar a sétima arte em toda a sua glória.', imageSrc: cinema },
    { title: 'Festival de Teatro', content: 'Deixa-te levar pela magia do teatro no Festival de Teatro. Assiste a performances cativantes, dramáticas e divertidas apresentadas por talentosos artistas. Uma oportunidade para explorar diferentes géneros teatrais e mergulhar nas histórias encenadas no palco.', imageSrc: teatro },
    { title: 'Clube de Leitura "Entre Páginas"', content: '"Entre Páginas" é mais do que um clube de leitura; é um refúgio para amantes da literatura. Mergulhe em diálogos envolventes, explore diversos gêneros literários e faça parte de uma comunidade unida pela paixão pelos livros.', imageSrc: livro },
    { title: 'Feira Antiguidades', content: 'Explora a história através da Feira de Antiguidades, onde cada objeto conta uma história única. Descubra tesouros do passado, desde móveis antigos a artefatos curiosos. Uma experiência fascinante para os amantes de antiguidades e colecionadores.', imageSrc: antiques },
  ];

  return (
    <div className="p-10 space-y-10">
      <div className="bg-yellow-200 space-y-2">
        <p className="font-poppins font-bold text-4xl">My Tickets</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
        {cardData.map((card, index) => (
          <div key={index} className="mb-10">
            <Card key={index} title={card.title} content={card.content} imageSrc={card.imageSrc} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default my_tickets;
