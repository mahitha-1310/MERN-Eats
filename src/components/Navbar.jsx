import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import Cart from "../screens/Cart"
import Modal from '../Modal';
import {useCart} from './ContextReducer'

const Navbar = () => {
  const [cartView, setCartView] = useState(false)
  const navigate = useNavigate();
  let data = useCart();

const handleLogout = () => {
  localStorage.removeItem("authToken")
  navigate("/")
} 

const loadCart = () => {
  setCartView(true)
}

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      {console.log(localStorage.getItem("authToken"))}
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic fw-bold" to="/">MEats</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
        
        {(localStorage.getItem("authToken"))?
        <li className="nav-item">
        <Link className="nav-link active fs-5" aria-current="page" to="/">My Orders</Link>
      </li>
      : ""
      }
      </ul>
      {(!localStorage.getItem("authToken"))?
        <div className="d-flex">
        <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>

        <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
        </div>
      : 
      <div>
        <div className="btn bg-white text-success mx-1" onClick={loadCart}>
          <span>My Cart </span>
          <Badge badgeContent={data.length} color="error" style={{ marginLeft: '8px' }}/>
        </div>
        {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
      <div className="btn bg-white text-danger mx-1" onClick={handleLogout}>Logout</div>
      </div>
      }

    </div>
  </div>
</nav>
  )
}

export default Navbar