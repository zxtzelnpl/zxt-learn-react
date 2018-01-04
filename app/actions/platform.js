import * as actionTypes from '../constants/platform'

export const change = data => ({
  type:actionTypes.PLATFORM_CHANGE,
  data
})