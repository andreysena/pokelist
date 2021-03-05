import React from 'react'

import * as S from '../style.js'
import colorByType from '../utils/colorByType'

export default (props) => {

    const { id, name, types } = props
    
    return(
            <S.Card >
                <S.ImageDiv bgColor={types ? colorByType(types) : colorByType(null)}>
                    <S.ImageInCardList 
                        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} 
                    />   
                </S.ImageDiv>
                <S.CardNumber>Nº {id}</S.CardNumber>
                <S.CardTitle>{ name ? name: "Infos not found"}</S.CardTitle>
                {
                    types ?   
                    
                        <p>{ types.map(pokeTypes => pokeTypes.type.name).join(' | ') }</p>
                        :
                        <p>Não encontrado</p>
                }
            </S.Card>
    )
    
       
    
}