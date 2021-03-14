import React from 'react'

import * as S from '../style'
import PokemonImage from './PokemonImage'
import PokeBodyInfo from './PokeBodyInfo'
import PokeAbilities from './PokeAbilities'
import PokeContainerType from './PokeContainerType'
import PokeStats from './PokeStats'

export default ({onClose = () => {}, id, name, height, weight, abilities, types, stats}) => {

    const handleOutside = (e) =>{
        if(e.target.id === "modal") onClose()
    }

    return (
        <S.Modal id={"modal"} onClick={handleOutside}>

            <S.ContainerModal>

                <S.CloseModalButton 
                    onClick={onClose}
                />
                
                <PokemonImage id={id} types={types[0].type.name} />


                <S.CardNumber>Nº {id}</S.CardNumber>

                <S.CardTitle>{ name ? name: "Não não encontrado"}</S.CardTitle>

                <S.ModalContent>

                    <S.FirstModalDivision>
                    
                        <PokeBodyInfo height={height} weight={weight} />
                        
                        <PokeAbilities abilities={abilities} />
                        
                    </S.FirstModalDivision>
                    
                    <S.TitleTypes>Tipos:</S.TitleTypes>
                    <PokeContainerType types={types} />

                    <PokeStats stats={stats}/>

                </S.ModalContent>
                
            </S.ContainerModal>

        </S.Modal>
    )
}