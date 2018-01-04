import './PropsCompareBox.less'
import React, {Component} from 'react'
import PropsList from '../containers/PropsList'
import componentData from '../static/data/componentData'

class PropsCompareBox extends Component {
  render() {
    let componentNames = this.props.componentNames
    let lists = componentData
        .filter(item => {
          return componentNames.indexOf(item.name) > -1
        })
        .map(component => {
          return <PropsList key={component.name} data={component} componentData={componentData}/>
        })
    return (
        <div className="PropsCompareBox">
          {lists}
        </div>
    )
  }
}

export default PropsCompareBox
