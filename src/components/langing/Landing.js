import React, { Component } from 'react'
import './Landing.css'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { loginClicked } from '../../redux/reducers/loginReducer'

const loginStyle = {
   content: {
     width: "250px",
     height: "350px",
     margin: "auto",
     display: "flex",
     flexDirection: "column",
     justifyContent: "space-around",
     alignItems: "center"
   }
 };


 const regStyle = {
   content: {
     width: "350px",
     height: "350px",
     margin: "auto",
     display: "flex",
     flexDirection: "column",
     justifyContent: "space-around",
     alignItems: "center"
   }
 };

class Landing extends Component {
   constructor(props){
      super(props)

      this.state = {
         isLoginClicked: false, 
         username: '', 
         password: '', 
      }
   }
   render(){
      console.log('landing page 40 ', this.props)
      const { username, password } = this.state; 
      const { isLoginClicked } = this.props; 
      return (
         <div className='landing' >
             <Modal
                isOpen={this.props.isLoginClicked}
                style={loginStyle}
                contentLabel="Example Modal" >
                <input className="input" placeholder="Enter your email" name="username" value={username} onChange={e => this.handleEvent(e)} />
                <input className="input" placeholder="Enter your password" name="password" value={password} onChange={e => this.handleEvent(e)} />
             </Modal>
         </div>
      ) 
   }
}


function mapStateToProps (state){
   return {
      isLoginClicked: state.loginReducer.isLoginClicked
   }
}

export default connect(mapStateToProps, { loginClicked })(Landing); 
