import React from 'react'
import PropsList from '../components/PropsList'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    platform:state.platform,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PropsList)