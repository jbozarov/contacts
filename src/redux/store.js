import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import loginReducer from './reducers/loginReducer'


function logger (store) {
   return function(next) {
      return function (action) {
         console.log(next(action))
      }
   }
}


const rootReducer = combineReducers({
   loginReducer,
})


export default createStore(rootReducer, applyMiddleware(logger, promiseMiddleware ))