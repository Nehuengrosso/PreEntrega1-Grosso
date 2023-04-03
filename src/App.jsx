import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/navBar/navBar'
import Titulo from './componentes/Titulo/Titulo'
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner'
import CartWidget from './componentes/CartWidget/CartWidget'

function App() {
  
  return (
    <div className="App">
      <Titulo />
      <NavBar />
      <ItemListConteiner greeting={'Bienvenidos'}/>
      <CartWidget />
    </div>
  )
}

export default App
