import * as actionTypes from '../constants/propNames'

export const change = data => ({
  type:actionTypes.PROPS_CHANGE,
  data
})