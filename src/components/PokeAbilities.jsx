import React from 'react'

import * as S from '../style'

export default ({abilities}) => {

    return (
        <S.ContainerAbilities>
            <S.ModalTitle>Habilidades:</S.ModalTitle>
            {
                abilities.map((ability) => {
                    return <S.ModalP>{ ability.ability.name }</S.ModalP>
                })
            }
        </S.ContainerAbilities>
    )
}