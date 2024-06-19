import {put, call, takeEvery,} from 'redux-saga/effects'
import { failedFetch, fetchPokemons, loadingPokemon } from '../reducers/pokemonSlice'

const fetchingPokemons = async(page = 0) => {

    const resp =  await fetch(`https://pokeapi.co/api/v2/pokemon/ditto?limit=10&offset=${page*10}`)

    const data = resp.json()
    return data;
}

function* getPokemon(action) {
    const page = action.payload

    try{
        yield put(loadingPokemon())
        const data = yield call(fetchingPokemons, page)

        yield put(fetchPokemons({pokemons: data.result, page: page}))

    } catch (error) {

        yield put(failedFetch({error: error.message}))

    }
}

function* watchGetPokemon() {
    yield takeEvery('pokemon/fetchingPokemons', getPokemon)
}

export default watchGetPokemon;