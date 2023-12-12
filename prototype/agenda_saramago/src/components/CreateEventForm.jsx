import React, { useState } from 'react';
import axios from 'axios';

const CreateEventForm = () => {
  const [eventData, setEventData] = useState({
    name: '',
    company: '',
    description: '',
    tags: '',
    date_start: '',
    date_end: '',
    schedule: '',
    poster: '',
    prices: '',
    location: '',
    city: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to create the event
    axios.post('http://localhost:8080/api/events', eventData)
      .then(response => {
        console.log('Event created successfully:', response.data);
        // Optionally, you can redirect the user or update the event list
      })
      .catch(error => console.error('Error creating event:', error));
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input type="text" name="name" value={eventData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Company:
          <input type="text" name="company" value={eventData.company} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={eventData.description} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Tags:
          <input type="text" name="tags" value={eventData.tags} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Start Date:
          <input type="date" name="date_start" value={eventData.date_start} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          End Date:
          <input type="date" name="date_end" value={eventData.date_end} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Schedule:
          <input type="text" name="schedule" value={eventData.schedule} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Poster:
          <input type="text" name="poster" value={eventData.poster} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Prices:
          <input type="text" name="prices" value={eventData.prices} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" name="location" value={eventData.location} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          City:
          <input type="text" name="city" value={eventData.city} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEventForm;
