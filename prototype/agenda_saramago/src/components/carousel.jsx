import React, { useEffect, useState, useRef } from "react";

function CarouselComponent({ data }) {
  const [eventData, setEventData] = useState(null);
  const carouselRef = useRef(null);
  const autoPlayInterval = 3000; // Tempo em milissegundos para mudar de slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 1; // Total de slides no carrossel

  const goToPreviousSlide = () => {
    const previousSlide =
      currentSlide - 1 < 0 ? totalSlides - 1 : currentSlide - 1;
    setCurrentSlide(previousSlide);
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  };

  const goToNextSlide = () => {
    const nextSlide = currentSlide + 1 >= totalSlides ? 0 : currentSlide + 1;
    setCurrentSlide(nextSlide);
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };

  async function fetchData(apiEndpoint) {
    try {
      console.log(apiEndpoint);
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      setEventData(data); // Armazena o objeto de evento completo
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  useEffect(() => {
    fetchData(data);
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
        goToNextSlide();
      } else {
        console.log("Chamando handlePrev devido à rolagem");
        goToPreviousSlide();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [currentSlide]);

  if (!eventData) {
    return <div>Carregando...</div>;
  }

  return (
    <div >
      {Object.keys(eventData).map((type, index) => (
      <div>
        <div key={index}>
          <div className="text-neutral decoration-solid font-bold text-5xl text-shadow m-2">
            {`Eventos de ${type}...`}
          </div>
          <div
            className="carousel m-6 carousel-center w-[calc(100%-3rem)] space-x-4 h-[34rem]"
            ref={carouselRef}
          >
            {Array.isArray(eventData[type])
              ? eventData[type].map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className={`group carousel-item ${
                      eventIndex === currentSlide ? "current" : ""
                    }`}
                  >
                    {Object.keys(eventData).map((key, index) => (
                                <div
                                  key={index}
                                  className={`group carousel-item ${
                                    index === currentSlide ? "current" : ""
                                  }`}
                                >
                                  {eventData[key].map((event) => (
                                    <div key={event.id} className="w-96 relative">
                                      <img
                                        src={event.poster}
                                        alt={event.name}
                                        className="transition duration-300 ease-in-out group-hover:blur"
                                      />
                                      <div className="absolute inset-0 flex flex-col p-8 text-center justify-center items-center bg-black bg-opacity-50 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
                                        <h1 className="text-white text-xl">{event.name}</h1>
                                        <h2 className="text-white text-l">
                                          {"Organizadora: "}
                                          {event.company}
                                        </h2>
                                        <h2 className="text-white text-l">
                                          {"Data: "}
                                          {event.datestart}
                                        </h2>
                                        <h2 className="text-white text-l">
                                          {"Local: "}
                                          {event.location}
                                        </h2>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ))}
                  </div>
                ))
              : Object.values(eventData[type]).map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className={`group carousel-item ${
                      eventIndex === currentSlide ? "current" : ""
                    }`}
                  >
                    {/* Renderize os detalhes do evento aqui */}
                  </div>
                ))}
          </div>
        </div>
      ))}
       {/* Botoes */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a className="btn btn-primary" onClick={goToPreviousSlide}>
                {"❮"}
              </a>
              <a className="btn btn-primary" onClick={goToNextSlide}>
                {"❯"}
              </a>
            </div>
            </div>
    </div>
  );
}

export default CarouselComponent;
