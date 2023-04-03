import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
        <nav>
          <h3>Hola</h3>
          <div>
              <button>Remeras</button>
              <button>Buzos</button>
              <button>Zapatillas</button>
          </div>
          <CartWidget />
        </nav>
        
  )
}

export default NavBar