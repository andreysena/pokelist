import React, { useState } from 'react'

import * as S from '../style.js'
import colorByType from '../utils/colorByType'
import PokeContainerType from './PokeContainerType'
import PokeModal from './PokeModal'

export default (props) => {

    const { id, name, types } = props
    const [ isOpen, setIsOpen ] = useState(false)

    return(
            <>
            <S.Card onClick={() => setIsOpen(!isOpen)}>
                <S.ImageDiv bgColor={types ? colorByType(types) : colorByType(null)}>
                    <S.ImageInCardList 
                        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                    />   
                </S.ImageDiv>

                <S.CardNumber>Nº {id}</S.CardNumber>

                <S.CardTitle>{ name ? name: "Não não encontrado"}</S.CardTitle>

                <h4 style={{marginBottom: '15px'}}>Tipos: </h4>
                {
                    types ? 
                    <PokeContainerType types={types} />
                    :
                    <a>Não encontrado</a>
                }
                
            </S.Card>
            {
                isOpen ? <PokeModal onClose={() => setIsOpen(false)} name={name}/> : null
                    
            }
            </>
    )
    
       
    
}   