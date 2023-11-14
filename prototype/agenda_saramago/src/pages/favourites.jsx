import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ticket_cards';

function Favourites() {
    const likedevents = [
        { title: 'Evento 1', content: 'Conteúdo do Evento 1', imageSrc: '../assets/images/event1.jpg' },
        { title: 'Evento 2', content: 'Conteúdo do Evento 2', imageSrc: '../assets/images/event2.jpg' },
        { title: 'Evento 3', content: 'Conteúdo do Evento 3', imageSrc: '../assets/images/event3.jpg' },
      ];

      const savedevents = [
        { title: 'Evento 4', content: 'Conteúdo do Evento 4', imageSrc: '../assets/images/event4.jpg' },
        { title: 'Evento 5', content: 'Conteúdo do Evento 5', imageSrc: '../assets/images/event5.jpg' },
        { title: 'Evento 6', content: 'Conteúdo do Evento 6', imageSrc: '../assets/images/event6.jpg' },
      ];

  return (
    <div className="p-10 space-y-10">
      <div className="bg-yellow-200 space-y-2">
        <p className='font-poppins font-bold text-4xl'>The Events You Liked</p>
      </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }}>
        {likedevents.map((event, index) => (
          <Card key={index} title={event.title} content={event.content} imageSrc={event.imageSrc} />
        ))}
      </div>

      <div className="bg-blue-200 space-y-2">
        <p className='font-poppins font-bold text-4xl'>The Events You Saved</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }}>
        {savedevents.map((event, index) => (
          <Card key={index} title={event.title} content={event.content} imageSrc={event.imageSrc} />
        ))}
      </div>

    </div>
  );
}

export default Favourites;
