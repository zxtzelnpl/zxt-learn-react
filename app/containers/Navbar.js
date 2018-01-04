import React from 'react'
import Navbar from '../components/Navbar'
import { bindActionCreators } from 'redux'
import * as componentNamesActionsFromOtherFile from '../actions/componentNames'
import * as platformActionsFromOtherFile from '../actions/platform'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    componentNames:state.componentNames,
    platform:state.platform
  }
}

function mapDispatchToProps(dispatch) {
  return {
    componentNamesActions:bindActionCreators(componentNamesActionsFromOtherFile,dispatch),
    platformActions:bindActionCreators(platformActionsFromOtherFile,dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)