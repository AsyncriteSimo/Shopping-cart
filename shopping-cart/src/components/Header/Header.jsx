import React from 'react'
import './header.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Header() {
  return (
    <div className="header" >
        <h1>mamouth-shop</h1>
        <div className="cart" >2</div>
        <ShoppingCartOutlinedIcon />
    </div>
  )
}

export default Header