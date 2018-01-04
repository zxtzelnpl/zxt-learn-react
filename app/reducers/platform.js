import * as actionTypes from '../constants/platform'

const initialState = 'all'

export default function buttons(state=initialState,action){
  switch (action.type){
    case actionTypes.PLATFORM_CHANGE:
      return action.data
    default :
      return state
  }
}