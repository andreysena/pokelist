import React, { useState } from 'react'

import * as S from '../style'
import PokeCard from './PokeCard'
import pokemonByGeneration from '../utils/pokemonByGeneration'
import GenerationBarOpitions from './GenerationBarOpitions'
import ScrollToTop from './ScrollToTop'

export default ({ pokemon }) => {
    
    const [ rangeGeneration, setRangeGeneration ] = useState(pokemonByGeneration(1))

    function alterGeneration(gen){
        setRangeGeneration(gen)
        console.log(gen)
    }
    
    return(
        <S.MainContainer>
            <S.TitleOpitionsGen>ESCOLHA A GERAÇÃO:</S.TitleOpitionsGen>
            <GenerationBarOpitions alterGeneration={alterGeneration} />
            <S.List>
                
                {
                    pokemon.map((pokemon, index) => {
                        if(index >= rangeGeneration[0] && index <= rangeGeneration[1]){
                        
                        const { id, name, types} = pokemon

                        return (
                            <PokeCard
                                key={index}
                                id={id}
                                name={name}
                                types={types}
                            />
                                
                        )
                        }
                        
                    })
                }
                
                
            </S.List>
            <ScrollToTop />
        </S.MainContainer>
    )
}