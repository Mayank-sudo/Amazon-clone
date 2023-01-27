import React from 'react'
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
// import SearchIcon from '@mui/icons-material/Search';
import './Header.scss'
import { useStateValue } from './StateProvider'

const Header = () => {
   const { myReducer } = useStateValue()
   const [state] = myReducer

  return (
    <header className='header'>
        <div className='header__logo'>
        <Link to='/'>
        <AddBusinessIcon fontSize='large' />
        <span className="header__logoName">E-shop</span>
        </Link>
        </div>
        
        <div className='header__search'>
        
            <input 
            />
        </div>
        <div className="header__nav">
        
            <div className="header__nav__user">
                <span className="header__nav__lineOne">Hello Guest</span>
                <span className="header__nav__lineOne">Sign input </span>
            </div>
            <div className="header__nav__itemBasket">
            <Link to="/checkout">
            <ShoppingCartIcon fontSize='small' />{state.cartList.length} &nbsp;
            </Link>
            
                Cart
            </div>
        </div>
    </header>
  )
}

export default Header