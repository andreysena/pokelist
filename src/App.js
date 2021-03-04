import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PokemonList from './components/PokemonList'

export default function App() {

	const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
	const [ pokemonsUrl, setPokemonsUrl ] = useState([])
	const pokemonPromises = []
	const [isLoading, setIsLoading ] = useState(true)

	useEffect(() => {
		
		

		for(let i = 1; i <= 151; i++){

			if(i !== 115){
				pokemonPromises.push(
					axios.get(getPokemonUrl(i))
						.then(response => response.data)
						
				)
			
			}else{
				pokemonPromises.push([])
			}
		}	

		Promise.all(pokemonPromises)
			.then(pokemons => {
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
			<h1 style={{textAlign: 'center'}}>PokeList</h1>
			<PokemonList pokemons={pokemonsUrl}/>
		</>
	)
}