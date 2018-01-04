import * as actionTypes from '../constants/propNames'

export const initialState = []

export default function buttons(state=initialState,action){
  switch (action.type){
    case actionTypes.PROPS_CHANGE:
      let data = action.data
      if(state.indexOf(data)>-1){
        return state.filter(item=>{
          return item!==data
        })
      }
      else{
        return [...state,action.data]
      }

    default :
      return state
  }
}