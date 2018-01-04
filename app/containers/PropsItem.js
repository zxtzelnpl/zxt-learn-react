import React from 'react'
import PropsItem from '../components/PropsItem'
import { bindActionCreators } from 'redux'
import * as propNamesActionsFromOtherFile from '../actions/propNames'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    propNames:state.propNames,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    propNamesActions:bindActionCreators(propNamesActionsFromOtherFile,dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PropsItem)