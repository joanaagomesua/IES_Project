import React, { useState } from 'react';

function Card({ title, content, imageSrc }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '450px',
        height: '500px',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Div com a data visível sem hover */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          zIndex: 1,
          display: isHovered ? 'none' : 'block',
        }}
      >
      </div>

      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
          height: '100%',
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          style={{ width: '100%' }}
        />
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
          {/* Conteúdo visível apenas quando hover */}
          <b style={{ fontSize: '35px', marginBottom: '8px', color: '#333' }}>{title}</b>
          <p className='font-poppins w-full mb-4' style={{ fontSize: '24px', marginBottom: '8px', color: '#333' }}>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
