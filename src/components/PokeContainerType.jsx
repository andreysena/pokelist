import React from 'react'

import * as S from '../style'
import colorByType from '../utils/colorByType'

export default ({types}) => {
            
    return (
        <S.TypesContainer>
            {
                types.map((pokeTypes, index)=> {
                    
                    const type = types[index].type.name
                    
                    return(
                            <S.EachType 
                                bgColor={colorByType(type)}
                            >
                                <S.TextofType color={colorByType(type)}>
                                    { pokeTypes.type.name }
                                </S.TextofType>
                            </S.EachType> 
                    )
                    
                })
            }
        </S.TypesContainer>
    )  
}