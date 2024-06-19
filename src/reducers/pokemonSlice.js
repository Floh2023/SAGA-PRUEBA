import { createAction, createSlice } from "@reduxjs/toolkit";


export const pokemonSlice = createSlice({

    name: 'pokemon',
    initialState:{
        page: 1,
        pokemon: [],
        isLoading: false,
        error: null
    },
    reducers: {
        loadingPokemon: (state) => {

            state.isLoading = true

        },
        fetchPokemons: (state, action) => {

            state.isLoading= false;
            state.page= action.payload.page;
            state.pokemon = action.payload.pokemon;

        },

        failedFetch: (state, action) => {
            state.isLoading= false;
            state.error= action.payload.error
        }
    }
})

export const {loadingPokemon, fetchPokemons, failedFetch} = pokemonSlice.actions

export default pokemonSlice

export const fetchingPokemons = createAction('pokemon/fetchingPokemons')