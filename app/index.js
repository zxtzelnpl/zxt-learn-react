import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import App from './App'
import {myStorage} from './static/js/tools'

let initialState
let store = configureStore(initialState)

render(
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
    , document.getElementById('root'))