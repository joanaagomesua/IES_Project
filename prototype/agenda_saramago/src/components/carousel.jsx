import React, { useEffect, useState, useRef } from "react";

const CarouselComponent = () => {
  const [eventData, setEventData] = useState(null);
  const carouselRef = useRef(null);
  const autoPlayInterval = 3000; // Tempo em milissegundos para mudar de slide
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 1; // Total de slides no carrossel

  const goToPreviousSlide = () => {
    const previousSlide = currentSlide - 1 < 0 ? totalSlides - 1 : currentSlide - 1;
    setCurrentSlide(previousSlide);
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  };

  const goToNextSlide = () => {
    const nextSlide = currentSlide + 1 >= totalSlides ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:8080/api/events/1');
      const data = await response.json();
      setEventData(data); // Armazena o objeto de evento completo
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
    
  }

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
      }
    }, autoPlayInterval);


    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const carouselPosition = carouselRef.current.getBoundingClientRect().top;

      console.log("Posição de rolagem:", scrollPosition);
      console.log("Posição do carrossel:", carouselPosition);

      if (scrollPosition > carouselPosition) {
        console.log("Chamando handleNext devido à rolagem");
        handleNext();
      } else {
        console.log("Chamando handlePrev devido à rolagem");
        handlePrev();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval)
    };
  }, [currentSlide]);

  if (!eventData) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="relative">
      <div className="carousel carousel-center p-4 space-x-4 bg-secondary h-[34rem] w-full rounded-box" ref={carouselRef}>
        {/* Renderiza a imagem do evento */}
        <div className="carousel-item w-96 ">
          <img src={eventData.poster} alt={eventData.name} />
        </div>
        <div className="carousel-item w-96 ">
          <img src={eventData.poster} alt={eventData.name} />
        </div>
        <div className="carousel-item w-96 ">
          <img src={eventData.poster} alt={eventData.name} />
        </div>
        <div className="carousel-item w-96 ">
          <img src={eventData.poster} alt={eventData.name} />
        </div>
        <div className="carousel-item w-96 ">
          <img src={eventData.poster} alt={eventData.name} />
        </div>
        <div className="carousel-item w-96 ">
          <img src={eventData.poster} alt={eventData.name} />
        </div>

        {/* Botoes */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          className="btn btn-primary"
          onClick={goToPreviousSlide}
        >
          {"❮"}
        </a>
        <a
          className="btn btn-primary"
          onClick={goToNextSlide}
        >
          {"❯"}
        </a>
      </div>
    </div>
      </div>
  );
}

export default CarouselComponent;