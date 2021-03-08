import React, { useState, useEffect } from 'react'
import axios from 'axios'

import * as S from './style'

import Loading from './components/Loading'
import PokeTitle from './components/PokeTitle'
import PokeList from './components/PokeList'

export default function App() {

	const [ pokemonUrl, setPokemonUrl ] = useState([])
	const pokemonPromises = []
	const [isLoading, setIsLoading ] = useState(true)

	const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
	
	useEffect(() => {

		for(let i = 1; i <= 898; i++){

			pokemonPromises.push(
				axios.get(getPokemonUrl(i))
					.then(response => response.data)
					.catch(error => {
						console.log(i + " "+ error)
						return []
					})	
			)
		}	

		Promise.all(pokemonPromises)
			.then(pokemon => {
				console.log(pokemon)
				setIsLoading(false)
				setPokemonUrl(pokemon)
			})

	}, [])

	if(isLoading)
		return (
			<>
				<S.GlobalStyle />
				<Loading />
			</>
	)

	return (
		<>
			<S.GlobalStyle/>
			<PokeTitle />
			<S.MainContainer>
				<PokeList pokemon={pokemonUrl}/>	
			</S.MainContainer>
		</>
	)
}