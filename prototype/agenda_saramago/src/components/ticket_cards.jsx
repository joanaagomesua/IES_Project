import React, { useState } from 'react';

function Card({ title, content, imageSrc }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '16px',
        borderRadius: '8px',
        overflow: 'hidden',
        maxWidth: '450px',
        height: '500px',
        position: 'relative',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <div>
      <img
        src={imageSrc}
        alt={title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', fontSize: '30px', fontWeight: 'bold' }}
      />
    </div>
      <div
        style={{
          padding: '16px',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          display: isHovered ? 'block' : 'none',
        }}
      >
        <b style={{ fontSize: '35px', marginBottom: '8px', color: '#333' }} >{title}</b>
        <p className='font-poppins w-full mb-4' style={{ fontSize: '24px', marginBottom: '8px', color: '#333' }} >{content}</p>
      </div>
    </div>
  );
}

export default Card;
