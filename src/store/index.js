import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { authentication } from './reducers/authReducer'

export const store = createStore(
  combineReducers({
    authentication,
  }),
  applyMiddleware(thunkMiddleware)
)
