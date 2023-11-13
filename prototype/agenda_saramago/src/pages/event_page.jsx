import React, { useState } from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CarouselWithContent from '../components/carousel.jsx';
import Map from '../components/map.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair, faChild, faPerson, faPersonCane } from '@fortawesome/free-solid-svg-icons';

function event_page(){
    return (
        <div className="p-10 space-y-10">
            <div className="bg-blue-200 space-y-2">
                <p className='font-poppins font-bold text-4xl'>The Magical Fairy Kingdom</p>
                <p className='font-poppins text-3xl'>By: Tiny Kids</p>
            </div>
            <div className=' flex bg-green-200 space-x-10'>
                <div className='flex-initial w-1/4'>
                    <img src="./src/assets/images/poster_test.png"></img>
                </div>
                <div className='w-1/2 flex flex-col'>
                    <div className='flex font-poppins font-bold mb-4'>
                        <div className='w-1/2 flex flex-row items-center'>
                            <FontAwesomeIcon icon={faChair}  className="mr-2" />
                            <div className="rounded-full w-full bg-neutral-200 dark:bg-neutral-600">
                                <div className="bg-primary p-2 text-center text-xs font-medium leading-none text-primary-100" style={{ width: '25%' }}>
                                25%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='font-poppins w-full mb-4'>
                        <p>The play begins with a beautiful and captivating opening scene that sets the tone for the rest of the performance. The stage is transformed into a magical forest, complete with towering trees, colorful flowers, and twinkling fairy lights. The audience is transported to a world of wonder and enchantment, where anything is possible.

                        As the story unfolds, the audience is introduced to a cast of lovable and memorable characters. Lily, the fairy princess, is brave and determined, and her journey to save her kingdom is both exciting and inspiring. Sparkle, the unicorn, is a loyal and steadfast companion, and his bravery and courage are a source of inspiration for Lily and the other characters.

                        Tinker, the mischievous fairy, adds a touch of humor to the play, and her antics and pranks are sure to delight children of all ages. Merlin, the wise old wizard, provides guidance and wisdom to Lily and the other characters, and his presence adds a sense of magic and mystery to the play.

                        The play is filled with memorable scenes and moments that will stay with the audience long after the performance has ended. From the breathtaking finale to the heartwarming moments of friendship and camaraderie, The Magical Fairy Kingdom is a play that will capture the hearts and imaginations of children and adults alike.

                        The costumes and sets are designed to be visually stunning and to transport the audience to a magical world of wonder and enchantment. The music and sound effects are carefully chosen to enhance the mood and atmosphere of the play, and the lighting and special effects add to the overall sense of magic and wonder.

                        Overall, The Magical Fairy Kingdom is a play that is sure to delight and inspire children of all ages. It is a testament to the power of imagination and creativity, and it is a must-see for anyone who loves magic, adventure, and enchantment.
                        </p>
                    </div>
                    <div className='font-poppins'>
                        <h2 className='font-bold mb-2'>Tags:</h2>
                        <div class="box-border h-20 w-full p-4 border-2 border-black border-opacity-10">
                            <div className='flex space-x-2'>
                                <div className="rounded-full bg-slate-200 bg-opacity-100 p-2">
                                    <p className="text-black">#theatre</p>
                                </div>
                                <div className="rounded-full bg-slate-200 bg-opacity-100 p-2">
                                    <p className="text-black">#kids</p>
                                </div>
                                <div className="rounded-full bg-slate-200 bg-opacity-100 p-2">
                                    <p className="text-black">#happy</p>
                                </div>
                                <div className="rounded-full bg-slate-200 bg-opacity-100 p-2">
                                    <p className="text-black">#fantasy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='font-poppins'>
                    <h2 className='font-bold text-2xl mb-4'>Preços</h2>
                    <div className='flex flex-col'>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faChild}  className="mr-4 mb-2" />
                            <h3 className='mr-2'>Children:</h3>
                            <br/>
                            <p>2€</p>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faPerson}  className="mr-4 mb-2" />
                            <h3 className='mr-2'>Adults:</h3>
                            <p>6€</p>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faPersonCane}  className="mr-4 mb-2" />
                            <h3 className='mr-2'>Seniores:</h3>
                            <p>3€</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex h-auto bg-yellow-200'>
                <div className='w-2/3'>
                    <h1 className='font-poppins font-bold text-3xl'>Similar Events</h1>
                    <CarouselWithContent/>
                </div>
                <div className='w-1/3'>
                    <h2 className='font-poppins font-bold'>Localização</h2>
                </div>
            </div>
        </div>
    )
}

export default event_page
