import React, { useState } from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function event_page(){
    return (
        <div className="p-10 space-y-10">
            <div className="bg-blue-200 space-y-2">
                <p className='font-custom font-bold text-4xl'>The Magical Fairy Kingdom</p>
                <p className='font-custom font-bold text-3xl'>By: Tiny Kids</p>
            </div>
            <div className='flex bg-green-200 space-x-10'>
                <div className='flex-initial basis-1/4'>
                    <img src="./src/assets/images/poster_test.png"></img>
                </div>
                <div>
                    <div className='font-custom font-bold'>
                        LOTAÇÃO + PREÇOS
                    </div>
                    <div className='font-custom font-bold'>
                        DESCRIÇÃO
                    </div>
                </div>
            </div>
            <div className='bg-yellow-200'>
                <div className='font-custom font-bold'>
                    SIMILAR EVENTS
                </div>
                <div>
                    MAPA DO LOCAL
                </div>
            </div>
        </div>
    )
}

export default event_page
