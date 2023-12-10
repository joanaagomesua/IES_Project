import React, { useState } from 'react';
import Card from '../components/ticket_cards';
import { SearchBar } from "../components/SearchBar.jsx";
import { SearchResultsList } from "../components/SearchResultsList.jsx";
import "../assets/css/styles.css";

function event_search_page() {
    const cardData = [
        { title: 'Campeonato Karaté', content: 'Participa num emocionante'},
        { title: 'Dança Contemporanea', content: 'Deixa-te envolver pela'},
        { title: 'Feira de Queijos e Vinhos', content: 'Desfruta de uma experiência'},
        { title: 'Festival de Cinema', content: 'Imersa-te no mundo ' },
        { title: 'Clube de Leitura "Entre Páginas"', content: '"Entre Páginas" é mais'},
        { title: 'Feira Antiguidades', content: 'Explora a história através'},
      ];

    
    const [results, setResults] = useState([]); 

    return (
        <div>
            <div>
                <div className="search-bar-container">
                    <SearchBar setResults={setResults} />
                    {results && results.length > 0 && <SearchResultsList results={results} />}
                </div>
            </div>

            <div className="p-20 space-y-20">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap:'20px' }}>
                    {cardData.map((event, index) => (
                    <Card key={index} title={event.title} content={event.content} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default event_search_page