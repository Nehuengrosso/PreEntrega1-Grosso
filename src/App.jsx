import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from './componentes/Titulo/Titulo'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import CartWidget from './componentes/CartWidget/CartWidget'
import NavBar from './componentes/navBar/navBar'

function App() {
  
  return (
    <div className="App">
      <Titulo />
      <NavBar />
      <ItemListConteiner greeting={'Bienvenidos'}/>
    </div>
  )
}

export default App
