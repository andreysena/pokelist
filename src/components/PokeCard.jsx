import React from 'react'

import * as S from '../style.js'
import colorByType from '../utils/colorByType'
import PokeContainerType from './PokeContainerType'

export default (props) => {

    const { id, name, types } = props
    
    return(
            <S.Card>
                <S.ImageDiv bgColor={types ? colorByType(types) : colorByType(null)}>
                    <S.ImageInCardList 
                        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                    />   
                </S.ImageDiv>

                <S.CardNumber>Nº {id}</S.CardNumber>

                <S.CardTitle>{ name ? name: "Não não encontrado"}</S.CardTitle>

                <h4 style={{marginBottom: '15px'}}>Tipos: </h4>

                <PokeContainerType types={types} />

            </S.Card>
    )
    
       
    
}   