import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Auxiliary from './hoc/Auxiliary/Auxiliary';
import './App.css';
import pokebalImg from './assets/gfx/pokebal.png';

import Pokemon from './components/Pokemon/Pokemon';
import Pagination from './components/Pagination/Pagination';
import Header from './components/Header/Header';

function App() {

  const [pokemonList, setPokemonList] = useState([]);
  const [currentUrl, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [nextUrl, setNextUrl] = useState();
  const [previousUrl, setPreviousUrl] = useState();

  const [pokemonUrl, setPokemonUrl] = useState('https://pokeapi.co/api/v2/pokemon/1');
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    axios.get(currentUrl)
      .then(response => {
        setPokemonList(response.data.results.map(p => p));
        setNextUrl(response.data.next);
        setPreviousUrl(response.data.previous);
      })
      .catch(error => console.log(error));

    axios.get(pokemonUrl).then(response => {
      setPokemonData(response.data);
      setLoading(false);
    })
      .catch(error => console.log(error));

  }, [currentUrl, pokemonUrl])


  let pokemons = pokemonList.map((pokemon, index) => {
    return (<li key={pokemon.name} onClick={() => setPokemonDetail(pokemon.url)}><p>{pokemon.name}</p> <img src={pokebalImg} /></li>);
  });


  const setNextPage = () => {
    setUrl(nextUrl)
  }

  const setPrevPage = () => {
    setUrl(previousUrl)
  }

  const setPokemonDetail = (pokemonUrl) => {
    setPokemonUrl(pokemonUrl)
  }

  const setDatkMode = () => {
    setDarkMode(!darkMode);
  }

  let pokemonDetail = null;

  {
    loading ? pokemonDetail = <h1>Loading... </h1> : (
      pokemonDetail =
      <Pokemon
        name={pokemonData.name}
        id={pokemonData.id}
        url={pokemonData.sprites.front_default}
        type={pokemonData.types}
        stats={pokemonData.stats} />
    )
  }
  let bgColor = '#d6e4f3';
  let pokedexColor = 'transparent';

  if (!darkMode) {
    bgColor = '#000000'
    pokedexColor = '#d6e4f3'
  }

  return (
    <Auxiliary>
      <Header
        darkMode={setDatkMode}
        pokedexColor={pokedexColor}
      />

      {loading ? <h1>Loading... </h1> : (
        <main style={{
          background: `linear-gradient(${bgColor}, #ffffff)`
        }}>
          {pokemonDetail}

          <section>
            {pokemons}
          </section>

          <Pagination
            prevUrl={previousUrl}
            prevPage={setPrevPage}
            nextPage={setNextPage} />
        </main>
      )}

      <footer>
        ©coded by Kamil Sobczak
      </footer>
    </Auxiliary>
  );
}

export default App;
