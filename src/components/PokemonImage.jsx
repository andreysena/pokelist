import React from 'react'

import * as S from '../style'
import colorByType from '../utils/colorByType'

export default ({types, id}) => {

    return (
        <S.ImageDiv bgColor={types ? colorByType(types) : colorByType(null)}>
            <S.ImageInCardList 
                src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            />   
        </S.ImageDiv>
    )
}