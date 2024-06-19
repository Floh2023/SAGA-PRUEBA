import {all}from 'redux-saga/effects'
import watchGetPokemon from './saga'

export default function* rootSaga() {
    yield all([
        watchGetPokemon(),
    ])

}