import React from 'react';
import pokedexImg from '../../assets/gfx/pokedex.png';
import pokedexTitle from '../../assets/gfx/pokedexTitle.png';
import './Header.css';

const header = ({darkMode, pokedexColor}) => {
    return (<header>
        <img className="pokeTitle" src={pokedexTitle} />

        <div className="pokedex" onClick={darkMode} >
            <div className="pokedex__screen"
                style={{
                    backgroundColor: `${pokedexColor}`
                }}></div>
            <img src={pokedexImg} />
        </div>

    </header>);
}

export default header;