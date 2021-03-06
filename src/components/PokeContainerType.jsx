import React from 'react'

import * as S from '../style'
import colorByType from '../utils/colorByType'

export default ({types}) => {

    return (
        <S.TypesContainer>
            {
            types.map((pokeTypes, index)=> {
                
                return(
                    
                        <S.EachType 
                            bgColor={colorByType(types, index)}
                        >
                            <S.TextofType color={colorByType(types, index)}>
                                { pokeTypes.type.name }
                            </S.TextofType>
                        </S.EachType> 
                    
                )
                
            })
            }
        </S.TypesContainer> 
        
    )
}