import axios from 'axios'
import { LOADING, USER_LOGGED_IN } from './actionTypes' 






export const login = obj => {
   console.log('login creator ', obj)
   return dispatch => {
      dispatch(loading(true))
      dispatch(asyncLogin(obj))
   }
}


export const loading = bool => {
   return {
      type: LOADING,
      payload: bool
   }
}

const asyncLogin = async obj => {
   const { username, password } = obj; 
   const user = await axios.post('/api/login', obj)
   if (user) {
      return {
         type: USER_LOGGED_IN,
         payload: user
      }
   }
}