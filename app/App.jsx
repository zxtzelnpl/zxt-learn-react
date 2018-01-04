import './App.less'
import React, {Component} from 'react'
import PropsCompareBox from './containers/PropsCompareBox'
import Navbar from './containers/Navbar'

class App extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <PropsCompareBox />
        </div>
    )
  }
}

export default App
