import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/actionTypes'
import { login } from '../actions/loginCrator'

const initialState = {
   user: {}
}



export const userLoggedIn = obj => login(obj); 


export function userReducer ( state = initialState, action ) {
   const { type, payload } = action 
   switch(type) {
      case USER_LOGGED_IN: return {...state, user: payload }
      default: return state; 
   }
}