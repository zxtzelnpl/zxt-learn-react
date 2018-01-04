import './PropsItem.less'
import React, {Component} from 'react'

class PropsItem extends Component {

  onClick(e){
    let propName = e.target.innerHTML
    this.props.propNamesActions.change(propName)
  }

  render() {
    let data = this.props.data
    let propNames = this.props.propNames
    let className = "PropsItem"
    if (data.platform) {
      className += ' ' + data.platform
    }

    if(propNames.indexOf(data.name)>-1){
      className += ' select'
    }

    return (
        <p
            className={className}
            onClick={this.onClick.bind(this)}
        >
          {data.name}
        </p>
    )
  }
}

export default PropsItem
