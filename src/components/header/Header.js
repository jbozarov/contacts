import React from 'react'
import './Header.css'
import { connect } from 'react-redux'
import { loginClicked } from '../../redux/reducers/loginReducer'

const Header = () => {

   const handleLogin = () => loginClicked(true); 

   return (
      <div className='header-navbar' >
         <h1>Logo</h1>
         <div className='login-reg' >
            <h1 onClick={handleLogin} >Sign in </h1>
            <h1> Register </h1>
         </div>

      </div>
   )
}


export default connect(null, { loginClicked })(Header); 