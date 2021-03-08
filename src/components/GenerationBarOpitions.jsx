import React, { useState } from 'react'

import * as S from '../style'
import pokemonByGeneration from '../utils/pokemonByGeneration'

export default (props) => {

    const [ selected, setSelected ] = useState(1)

    return(
        <S.GenOpitionBar>

            <S.GenOpition
                value={1}
                generation={selected}
                onClick={() => {props.alterGeneration(pokemonByGeneration(1)); setSelected(1)}}
            >1</S.GenOpition>

            <S.GenOpition
                value={2}
                generation={selected}
                onClick={() => {props.alterGeneration(pokemonByGeneration(2)); setSelected(2)}}
            >2</S.GenOpition>

            <S.GenOpition
                value={3}
                generation={selected}
                onClick={() => {props.alterGeneration(pokemonByGeneration(3)); setSelected(3)}}
            >3</S.GenOpition>

            <S.GenOpition
                value={4}
                generation={selected}
                onClick={() => {props.alterGeneration(pokemonByGeneration(4)); setSelected(4)}}
            >4</S.GenOpition>

            <S.GenOpition
                value={5}
                generation={selected}
                onClick={() => {props.alterGeneration(pokemonByGeneration(5)); setSelected(5)}}
            >5</S.GenOpition>

            <S.GenOpition
                value={6}
                generation={selected}
                onClick={() => {props.alterGeneration(pokemonByGeneration(6)); setSelected(6)}}
            >6</S.GenOpition>

            <S.GenOpition
                value={7}
                generation={selected}
                onClick={() => {props.alterGeneration(pokemonByGeneration(7)); setSelected(7)}}
            >7</S.GenOpition>

            <S.GenOpition
                value={8}
                generation={selected}
                onClick={() => {props.alterGeneration(pokemonByGeneration(8)); setSelected(8)}}
            >8</S.GenOpition>

        </S.GenOpitionBar>
    )
}