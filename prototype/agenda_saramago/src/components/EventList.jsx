import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the backend when the component mounts
    axios.get('http://localhost:8080/api/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <strong>Name:</strong> {event.name} <br />
            <strong>Company:</strong> {event.company} <br />
            <strong>Description:</strong> {event.description} <br />
            <strong>Tags:</strong> {event.tags} <br />
            <strong>Start Date:</strong> {event.date_start} <br />
            <strong>End Date:</strong> {event.date_end} <br />
            <strong>Schedule:</strong> {event.schedule} <br />
            <strong>Poster:</strong> {event.poster} <br />
            <strong>Prices:</strong> {event.prices} <br />
            <strong>Location:</strong> {event.location} <br />
            <strong>City:</strong> {event.city} <br />
            {/* Add other fields as needed */}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
