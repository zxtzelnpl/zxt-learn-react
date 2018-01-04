import {combineReducers} from 'redux'
import propNames from './propNames'
import componentNames from './componentNames'
import platform from './platform'

export default combineReducers({
  propNames,
  componentNames,
  platform
})