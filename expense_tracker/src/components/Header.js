import React from 'react'
import Logo from '../asset/img/logo.png'

function Header() {
  return (
    <div className='header'>
        <img src={Logo}/>
        <h2>Expense Tracker</h2>
    </div>
  )
}

export default Header


