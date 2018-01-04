import './Navbar.less'
import React, {Component} from 'react'
import componentData from '../static/data/componentData'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      componentBox: false,
      platformBox:false,
    }
  }

  stateChangeComponentBox() {
    this.setState(({componentBox}) => {
      return {
        componentBox: !componentBox
      }
    })
  }
  stateChangePlatformBox() {
    this.setState(({platformBox}) => {
      return {
        platformBox: !platformBox
      }
    })
  }


  add(name){
    this.props.componentNamesActions.add(name)
  }

  minus(name){
    this.props.componentNamesActions.minus(name)
  }

  platformChange(e){
    let platform = e.target.innerHTML
    this.props.platformActions.change(platform)
  }

  render() {
    let componentNames = this.props.componentNames
    let lis = componentData.map(item => {
      return <li key={item.name}>
        <span>
          {item.name}
        </span>
        {componentNames.indexOf(item.name)>-1
            ?<span className="minus" onClick={this.minus.bind(this,item.name)}>-</span>
            :<span className="add" onClick={this.add.bind(this,item.name)}>+</span>
        }

      </li>
    })
    return (
        <div className="Navbar">
          <div className="component">
            <div className="choice"
                 onClick={this.stateChangeComponentBox.bind(this)}
            >choiceComponent:{this.props.componentNames.length}
            </div>
            <div className="names">
              <ul style={{"display": this.state.componentBox ? "block" : "none"}}>
                {lis}
              </ul>
            </div>
          </div>
          <div className="platform">
            <div className="choice"
                 onClick={this.stateChangePlatformBox.bind(this)}
            >choicePlatform:{this.props.platform}
            </div>
            <div className="names">
              <ul
                  style={{"display": this.state.platformBox ? "block" : "none"}}
                  onClick={this.platformChange.bind(this)}
              >
                <li>both</li>
                <li>Android</li>
                <li>iOS</li>
                <li>all</li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

export default Navbar
