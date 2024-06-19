import { configureStore } from "@reduxjs/toolkit";
//import { counterSlice } from "../reducers/contadorSlice";
import { pokemonSlice } from "../reducers/pokemonSlice";
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        //contador: counterSlice.reducer,
        pokemons: pokemonSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;
