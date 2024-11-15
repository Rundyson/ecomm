import { Search, ShoppingBag } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { imgPath } from '../helpers/functions-general'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="header-wrapper flex justify-between items-center py-5">
                <ul className="left-menu flex gap-5">
                    <li><NavLink>Men</NavLink></li>
                    <li><NavLink>Women</NavLink></li>
                    <li><NavLink>Kids</NavLink></li>
                    <li><NavLink>News & Featured</NavLink></li>
                    <li><NavLink>Gift</NavLink></li>
                </ul>
                <div className="header-logo ">
                    <img src={`${imgPath}/headerlogo.png`} alt="" />
                </div>
                <div className="right-menu flex gap-5">
                    <button><Search strokeWidth={1}/></button>
                    <button><ShoppingBag/></button>
                    <Link>Login</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
