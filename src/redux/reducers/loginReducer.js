// import { LOGIN_CLICKED } from '../actions/actionTypes'

const initialStore = {
   isLoginClicked: false, 
}

const LOGIN_CLICKED = 'LOGIN_CLICKED'
export const loginClicked = (bool) => {
   console.log('reducer line 9 ', LOGIN_CLICKED, bool)
   return {
      type: LOGIN_CLICKED, 
      payload: bool
   }
}


export default function loginReducer(state=initialStore, action) {
   console.log('fired loginreducer ', action )
   const { type, payload } = action; 
   switch(type) {
      case LOGIN_CLICKED: return {isLoginClicked: payload };
      default: return state; 
   }
}