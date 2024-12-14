import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Navbar, Container, Nav, Badge } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useContext } from 'react'
import { Store } from './Store'
import CartScreen from './screens/CartScreen'
import SigninScreen from './screens/SignInScreen'

function App() {
  const {state} = useContext(Store);
  const {cart} = state
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header className="App-header">
          <Navbar className="bg-dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand className="text-light">Amazon</Navbar.Brand>
              </LinkContainer>

              <Nav className = 'me-auto'>
                <Link to="/cart" className='nav-link text-light'>Cart{cart.cartItems.length>0 && (
                  <Badge pill bg='danger'>{cart.cartItems.reduce((a, c)=>a + c.quantity, 0)}</Badge>
                )}</Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main className='mt-3'>
          <Container>
            <Routes>
              <Route path={'/product/:slug'} element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All right reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
