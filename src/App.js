import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// here we create the Component App which will contain all our Components as done below
import Home from './Components/Home'
import About from './Components/About'
import Menu from './Components/Menu'
import Contact from './Components/Contact'

function App() {
  return (
    <Router>
      {/* we will wrap all the jsx elements in the Router tag */}
      <div id='container'>
        <header id='header-color'>
          <h1>Crossroads Cafe</h1>
          <br />
          <br />
        </header>
        <div id='navdiv'>
          <ul>
            <li className='nav'>
              <Link to='/' className='navbar'>
                Home
              </Link>
            </li>
            <li className='nav'>
              <Link to='/Menu' className='navbar'>
                Coffee Menu
              </Link>
            </li>
            <li className='nav'>
              <Link to='/About' className='navbar'>
                About us
              </Link>
            </li>
            <li className='nav'>
              <Link to='/Contact' className='navbar'>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <Routes>
        {/* here below is the route to the landing page "Home" */}
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/About' element={<About />}></Route>
        <Route exact path='/Menu' element={<Menu />}></Route>
        <Route exact path='/Contact' element={<Contact />}></Route>
      </Routes>
    </Router>
  )
}

export default App
