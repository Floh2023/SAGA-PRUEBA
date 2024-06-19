import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchingPokemons } from "../reducers/pokemonSlice"

export const Pokemons = () => {

   const {isLoading, pokemons = [], page, error}= useSelector(state => state.pokemons)

   console.log(isLoading, pokemons, page, error)

   const dispatch = useDispatch()

   useEffect (()=> {
    dispatch(fetchingPokemons())
   }, [])
    return(
        <div>
            <h1>Pokemon</h1>
            {error && <p>Algo ha salido mal...</p>}
            { isLoading && <p> Cargandp</p> } 
            <div>
                {pokemons.map((pokemon) => (
                    <p key={pokemon.name}>{pokemon.name}</p>
                ))}
            </div>
            <button
            onClick={()=> {dispatch(fetchingPokemons(page))}}
            
            >Next Page</button>
        </div>
    )
}