import React from 'react'
import PropsCompareBox from '../components/PropsCompareBox'
import { bindActionCreators } from 'redux'
import * as componentNamesActionsFromOtherFile from '../actions/componentNames'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    componentNames:state.componentNames,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    componentNamesActions:bindActionCreators(componentNamesActionsFromOtherFile,dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PropsCompareBox)