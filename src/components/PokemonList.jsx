import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList({ pokemons }) {

    return(
        <div>
            <ul style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                    pokemons.map((pokemon) => {

                        const { id, name, types} = pokemon

                        return (
                            <PokemonCard
                                key={id + 1}
                                id={id}
                                name={name}
                                types={types}
                            />
                               
                        )
                    })
                }
            </ul>
        </div>
    )
}