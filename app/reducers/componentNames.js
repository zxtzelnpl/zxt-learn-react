import * as actionTypes from '../constants/componentNames'
import componentData from '../static/data/componentData'
export const initialState = componentData.map(item=>item.name)

export default function componentNames(state=initialState,action){
  switch (action.type){
    case actionTypes.COMPONENT_NAME_ADD:
      return [...state,action.data]
    case actionTypes.COMPONENT_NAME_MINUS:
      return state.filter(item=>{
        return item!==action.data
      })
    default :
      return state
  }
}