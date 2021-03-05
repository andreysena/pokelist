import React from 'react'

import * as S from '../style'
import PokemonCard from './PokemonCard'

export default function PokemonList({ pokemons }) {

    return(
        <S.List style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                pokemons.map((pokemon, index) => {

                    const { name, types} = pokemon

                    return (
                        <PokemonCard
                            key={index}
                            id={index + 1}
                            name={name}
                            types={types}
                        />
                            
                    )
                })
            }
        </S.List>
    )
}