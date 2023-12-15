import React, { useEffect, useState } from 'react';
import axios from "axios";
import CarouselWithContent from '../components/carousel.jsx';
import Map from '../components/map.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair, faChild, faPerson, faPersonCane, faPlus, faUsers, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

function event_page() {
    const { id } = useParams();
    const [eventData, setEventData] = useState(null);

    function formatarData(dateString) {
        const data = new Date(dateString);
        const dia = data.getDate();
        const mes = data.getMonth() + 1;
        const ano = data.getFullYear();
    
        const diaFormatado = dia < 10 ? `0${dia}` : dia;
        const mesFormatado = mes < 10 ? `0${mes}` : mes;
    
        return `${diaFormatado}/${mesFormatado}/${ano}`;
    }
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/api/events/${id}`);
            setEventData(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [id]);

      useEffect(() => {
        if (eventData) {
        }
      }, [eventData, id, history]);
    
      if (!eventData) {
        return <div>Loading...</div>;
      }

      const pricesArray = eventData.prices.split(',').map((price) => price.trim());

        return ( 
                <div className="p-10 space-y-10">
                    <div className="bg-blue-200 space-y-2">
                        <p className='font-poppins font-bold text-4xl'>{eventData.name}</p> {/* Title */}
                        <p className='font-poppins text-3xl'>{eventData.company}</p> {/* Company*/}
                    </div>
                    <div className=' flex bg-green-200 space-x-10'>
                            <div className='flex-initial w-1/4'>
                                <div className='relative'>
                                    <img src={eventData.poster} alt="Event Poster"></img>{/*Image-> POSTER */}
                                    <div className="absolute top-0 right-0 p-4 flex items-center justify-center">
                                        <button className="w-10 h-10 rounded-full bg-slate-300 hover:bg-slate-500 text-white">
                                            <FontAwesomeIcon icon={faPlus}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/2 flex flex-col'>
                                <div className='flex font-poppins font-bold mb-4'>
                                    <div className='w-1/2 flex flex-row items-center'>
                                        <FontAwesomeIcon icon={faChair}  className="mr-2" />
                                        <div className="rounded-full w-full bg-neutral-200 dark:bg-neutral-600">
                                            <div className="bg-primary p-2 text-center text-xs font-medium leading-none text-primary-100" style={{ width: '25%' }}>
                                            25% {/*ocupancy*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='font-poppins w-full mb-4'> {/* Description*/}
                                    <p>{eventData.description}</p>
                                </div>
                                <div className='font-poppins'>
                                    <h2 className='font-bold mb-2'>Tags:</h2> {/*tags*/}
                                    <div className="box-border h-20 w-full p-4 border-2 border-black border-opacity-10">
                                        <div className='flex space-x-2'>
                                            {eventData.tags.split(',').map((tag, index) => (
                                            <div key={index} className="rounded-full bg-slate-200 bg-opacity-100 p-2">
                                                <p className="text-black">#{tag.trim()}</p>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='font-poppins'>
                            <h2 className='font-bold text-2xl mb-4'>Preços</h2>
                                <div className='flex flex-col'>
                                    {pricesArray.map((priceItem, index) => {
                                    const [category, value] = priceItem.split(':');
                                    let icon = null;
                                    if (category.toLowerCase() === 'children') {
                                        icon = <FontAwesomeIcon icon={faChild} />;
                                    } else if (category.toLowerCase() === 'seniors') {
                                        icon = <FontAwesomeIcon icon={faPersonCane} />;
                                    } else if (category.toLowerCase() === 'adults') {
                                        icon = <FontAwesomeIcon icon={faPerson} />;
                                    }else if (category.toLowerCase() === 'family') {
                                        icon = <FontAwesomeIcon icon={faUsers} />;
                                    }else if (category.toLowerCase() === 'students') {
                                        icon = <FontAwesomeIcon icon={faGraduationCap} />;
                                    }
                                    return (
                                        <div key={index} className="flex items-center">
                                            {icon && <div className="mr-2">{icon}</div>}
                                            <h3>{category}:</h3>
                                            <p>{value}€</p>
                                        </div>
                                    );
                                    })}
                                </div>
                                <div className='mt-4 mb-4'>
                                    <h2 className='font-bold text-2xl mt-4 mb-2'>Date</h2>
                                        <p>{formatarData(eventData.datestart)}</p>
                                        <h2 className='font-bold text-2xl mt-4 mb-2'>Schedule</h2>
                                        <p>{eventData.schedule}</p>
                                        <h2 className='font-bold text-2xl mt-4 mb-2'>Duration</h2>
                                        <p>{eventData.duration} minutos</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex h-auto bg-yellow-200 flex-col-reverse md:flex-row sm:flex-col'>
                        <div className='flex flex-col w-full md:w-2/3'>
                        <h1 className='font-poppins font-bold text-3xl mb-4'>Similar Events</h1>
                        <div className='flex items-start space-x-10'>
                        <div>
                            <h3 className='font-poppins text-2xl mb-2'>For kids...</h3>
                            <CarouselWithContent/>
                        </div>
                        <div className='border-l border-gray-500 pl-4'>
                            <div className='ml-6'>
                                <h3 className='font-poppins text-2xl mb-2'>For theatre lovers...</h3>
                                <CarouselWithContent />
                            </div>
                        </div>
                        <div className='border-l border-gray-500 pl-4'>
                            <div className='ml-6'>
                            <h3 className='font-poppins text-2xl mb-2'>Fantasy...</h3>
                            <CarouselWithContent/>
                            </div>
                        </div>
                            </div>
                            </div>
                            <div className='w-full md:w-1/3 flex flex-col order-3'>
                                <h2 className='font-poppins font-bold'>Location</h2>
                                <Map  width="560px" height="390px"/>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 mb-4'>
                    <h2 className='font-bold text-2xl mt-4 mb-2'>Date</h2>
                        <p>20 de novembro de 2023</p>
                        <h2 className='font-bold text-2xl mt-4 mb-2'>Schedule</h2>
                        <p>15:30</p>
                        <h2 className='font-bold text-2xl mt-4 mb-2'>Duration</h2>
                        <p>50 minutos</p>

                    </div>
                </div>
            </div>
            <div className='flex h-auto bg-yellow-200 flex-col-reverse md:flex-row sm:flex-col'>
            <div className='flex flex-col w-full md:w-2/3'>
            <h1 className='font-poppins font-bold text-3xl mb-4'>Similar Events</h1>
            <div className='flex items-start space-x-10'>
              <div>
                <h3 className='font-poppins text-2xl mb-2'>For kids...</h3>
                <CarouselWithContent/>
              </div>
              <div className='border-l border-gray-500 pl-4'>
                <div className='ml-6'>
                    <h3 className='font-poppins text-2xl mb-2'>For theatre lovers...</h3>
                    <CarouselWithContent />
                </div>
              </div>
              <div className='border-l border-gray-500 pl-4'>
                <div className='ml-6'>
                <h3 className='font-poppins text-2xl mb-2'>Fantasy...</h3>
                <CarouselWithContent/>
                </div>
              </div>
                </div>
                </div>
                <div className='w-full md:w-1/3 flex flex-col order-3'>
                    
                </div>
            </div>
        </div>
    );
    }


export default event_page