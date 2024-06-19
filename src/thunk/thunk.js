import { failedFetch, fetchPokemons, loadingPokemon } from "../reducers/pokemonSlice"

export const getPokemons = (page = 0) => {

    return async(dispatch) => {

        dispatch(loadingPokemon())
        try{

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto?limit=10&offset=${page*10}`)

            const data = await response.json()

            dispatch(fetchPokemons({pokemons: data.results, page: page + 1}))

        } catch (error) {

            dispatch(failedFetch({error: error.message}))

        }


    }


}