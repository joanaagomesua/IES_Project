import React, { useState, useEffect } from 'react';
import Card from '../components/ticket_cards';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MyTickets() {
  const { user } = useParams();
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/tickets/${user}`);
        setTicketData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [user]);

  useEffect(() => {
    if (ticketData) {
      console.log(ticketData);
    }
  }, [ticketData]);

  if (!ticketData) {
    return <div>You Don't Have Tickets...</div>;
  }

  return (
    <div className="p-10 space-y-10">
      <div className=" space-y-2">
        <p className="mt-10 mb-20 font-poppins text-[#a7c7eb] font-bold text-4xl">Os Meus Bilhetes:</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }}>
        {ticketData.map((item, index) => (
          <Card
            key={index}
            title={item.event.name}
            data={item.event.datestart}
            hora={item.event.schedule}
            city={item.event.city}
            location={item.event.location}
            price={item.event.prices}
          />
        ))}
      </div>
    </div>
  );
}

export default MyTickets;

