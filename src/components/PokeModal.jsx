import React from 'react'

import * as S from '../style'

export default ({id = "modal", onClose = () => {}, name}) => {

    const handleOutside = (e) =>{
        if(e.target.id === id) onClose()
    }

    return (
        <S.Modal id={id} onClick={handleOutside}>
            <S.ContainerModal>
                <S.CloseModalButton 
                    onClick={onClose}
                >close</S.CloseModalButton>
                <h1>{name}</h1>
            </S.ContainerModal>
        </S.Modal>
    )
}