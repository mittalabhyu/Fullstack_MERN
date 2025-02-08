import React from 'react'
import Logo from '../asset/img/logo.png'
import arrow from '../asset/img/downarrow.png'
import { useNavigate, useLocation } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("MSG ", location.pathname);
  return (
    <div className='header'>
      <div style={{ display: 'flex', width: '90%', alignItems: 'center' }}>
        <img src={Logo} />
        <h2>Expense Tracker</h2>
      </div>
      {
        location.pathname === '/dashboard' ?
          <div style={{ width: '10%', display: 'flex', alignItems: 'center' }}>
            <p className="dropbtn">User Name</p>
            <div className="dropdown">
              <img style={{ width: '10px', height: '10px', marginLeft: '10px' }} src={arrow} />
              <div className="dropdown-content">
                <p>Change Password</p>
                <p>Logout</p>
              </div>
            </div>
            {/* <p>User Name</p>
            <img style={{ width: '10px', height: '10px', marginLeft: '10px' }} src={arrow} /> */}
          </div>
          :
          null
      }

    </div>
  )
}

export default Header


