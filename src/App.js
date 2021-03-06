import React, { useState, useEffect } from 'react'
import axios from 'axios'

import * as S from './style'

import PokeTitle from './components/PokeTitle'
import PokeList from './components/PokeList'

export default function App() {

	const [ pokemonsUrl, setPokemonsUrl ] = useState([])
	const pokemonPromises = []
	const [isLoading, setIsLoading ] = useState(true)

	const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
	
	useEffect(() => {

		for(let i = 1; i <= 151; i++){

			pokemonPromises.push(
				axios.get(getPokemonUrl(i))
					.then(response => response.data)
					.catch(error => {
						console.log(error)
						return []
					})	
			)
		}	

		Promise.all(pokemonPromises)
			.then(pokemons => {
				console.log(pokemons)
				setIsLoading(false)
				setPokemonsUrl(pokemons)
			})
		
	}, [])

	if(isLoading)
		return (
			<div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
				<h1 style={{alignSelf: 'center'}}>Loading PokeList...</h1>
			</div>	
		)

	
	return (
		<>
			<S.GlobalStyle/>
			<PokeTitle />
			<PokeList pokemons={pokemonsUrl}/>
		</>
	)
}