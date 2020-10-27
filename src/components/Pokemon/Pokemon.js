import React from 'react';
import './pokemon.css';

const pokemon = ({ name, id, url, type, stats }) => {

    let types = type.map(({ type }, index) => {
        return (
            <p key={type + index} className={type.name}>{type.name}</p>
        )
    });

    let pokemonStats = stats.map((stats, index) => {
        return (
            <tr key={stats.stat.name + index}>
                <th>{stats.stat.name}</th>
                <th>{stats.base_stat}</th>
            </tr>
        );
    });

    return (
        <div className='pokemonDesc' id="testId">
            <div className="pokemonDesc__bscInfo">
                <h3>{id}.{name}</h3>
                <img src={url} />
            </div>

            <div className='pokemonDesc__types'>
                {types}
                <table>
                    <tbody>
                        {pokemonStats}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default pokemon;