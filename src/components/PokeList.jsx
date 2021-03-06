import React from 'react'

import * as S from '../style'
import PokeCard from './PokeCard'

export default ({ pokemons }) => {
    
    return(
        <S.List style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                pokemons.map((pokemon, index) => {

                    const { id, name, types} = pokemon

                    return (
                        <PokeCard
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