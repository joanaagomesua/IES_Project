import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ticket_cards';

function my_tickets(){
    
    const cardData = [
        { title: 'Campeonato Taekwondo', content: 'Conteúdo do Card 1', imageSrc: './src/assets/images/ballet.jpg.jpg' },
        { title: 'Dança Contemporêna', content: 'Conteúdo do Card 2', imageSrc: './images/ballet.jpg.jpg' },
        { title: 'Feira de Vinhos', content: 'Conteúdo do Card 3', imageSrc: './src/assets/images/logo.png' },
        { title: 'Festival de Cinema', content: 'Conteúdo do Card 4', imageSrc: './src/assets/images/logo.png' },
        { title: 'Mostra de Teatro', content: 'Conteúdo do Card 5', imageSrc: './src/assets/images/logo.png' },
        { title: 'Apresentação Livro', content: 'Conteúdo do Card 6', imageSrc: './src/assets/images/logo.png' },
        { title: 'Cinema Solidário', content: 'Conteúdo do Card 7', imageSrc: './src/assets/images/logo.png' },
      ];
    
      return (
        <div className="p-10 space-y-10">
          <div className="bg-yellow-200 space-y-2">
                <p className='font-poppins font-bold text-4xl'>My Tickets</p>
          </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)'}}>
            {cardData.map((card, index) => (
                <div key={index} className="mb-10">
                <Card key={index} title={card.title} content={card.content} />
                </div>
            ))}
            </div>
        </div>
      );
}

export default my_tickets
