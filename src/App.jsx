
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
//import Contador from './components/contador'
import { Pokemons } from './components/Pokemons'

function App() {

  return (
    <Provider store={store}>

      <div>
        <h1> Redux t</h1>
        <Pokemons/>
      </div>

    </Provider>
  )
}

export default App
