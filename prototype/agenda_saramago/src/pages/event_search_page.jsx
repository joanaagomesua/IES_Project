import React, { Fragment, useState } from 'react';
import Card from '../components/ticket_cards';
import { SearchBar } from "../components/SearchBar.jsx";
import { SearchResultsList } from "../components/SearchResultsList.jsx";
import "../assets/css/styles.css";
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'


function EventSearchPage() {
    const [open, setOpen] = useState(false);

    const staticData = [
        { title: 'Campeonato Karaté', content: 'Participa num emocionante'},
        { title: 'Dança Contemporanea', content: 'Deixa-te envolver pela'},
        { title: 'Feira de Queijos e Vinhos', content: 'Desfruta de uma experiência'},
        { title: 'Festival de Cinema', content: 'Imersa-te no mundo ' },
        { title: 'Clube de Leitura "Entre Páginas"', content: '"Entre Páginas" é mais'},
        { title: 'Feira Antiguidades', content: 'Explora a história através'},
    ];

    const [results, setResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchResultSelect = (selectedEvent) => {
        console.log('Selected Event:', selectedEvent);
    };

    const filterEvents = (value) => {
        setSearchQuery(value);
        const filteredResults = staticData.filter((event) =>
            event.title.toLowerCase().includes(value.toLowerCase()) ||
            event.content.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filteredResults);
    };

    const filters = [
        { name: 'Dança', href: '#', current: true },
        { name: 'Teatro', href: '#', current: false },
        { name: 'Música', href: '#', current: false },
        { name: 'Literatura', href: '#', current: false },
        { name: 'Artes Visuais', href: '#', current: false },
        { name: 'Cinema e Vídeo', href: '#', current: false },
        { name: 'Gastronomia', href: '#', current: false },
        { name: 'Carreira e Desenvolvimento Profissional', href: '#', current: false },
        { name: 'Educação e Aprendizagem', href: '#', current: false },
        { name: 'Cultura e Lazer', href: '#', current: false },
    ]; // filter options here

        
    

    
    return (
        <div>

            <div className="filter-panel">
                <button className="filter-button" onClick={() => setOpen(true)}>
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    
                </button>
                <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-800 sm:duration-700"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-500"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-500"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute right-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                <button
                                    type="button"
                                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="absolute -inset-2.5" />
                                    <span className="sr-only">Close panel</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                                </div>
                            </Transition.Child>
                            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                <div className="px-4 sm:px-6">
                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                    Filtra a tua pesquisa:
                                </Dialog.Title>
                                </div>
                                <div className="relative mt-6 flex-1 px-20 sm:px-6">
                                    
                                        Content here
                                    
                                </div>
                            </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                    </div>
                </Dialog>
                </Transition.Root>
            </div>
            <div>
                <div className="search-bar-container">
                    <SearchBar setResults={filterEvents} allEvents={staticData} />
                    {searchQuery && (
                        <div>
                            <p>You searched for: {searchQuery}</p>
                        </div>
                    )}
                    {results.length > 0 && (
                        <SearchResultsList results={results} onSelect={handleSearchResultSelect} />
                    )}
                </div>
            </div>

            <div className="p-20 space-y-20">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }}>
                    {results.length > 0
                        ? results.map((event, index) => (
                            <Card key={index} title={event.title} content={event.content} />
                        ))
                        : <p>No results found.</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default EventSearchPage;
