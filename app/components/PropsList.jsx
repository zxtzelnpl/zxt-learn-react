import './PropsList.less'
import React, {Component} from 'react'
import PropsItem from '../containers/PropsItem'

class PropsList extends Component {
  render() {
    let platform = this.props.platform
    let {name,Props,Methods} = this.props.data
    let items = Props.map(prop=>{
      if(platform === 'Android'&&prop.platform === 'iOS'){
        return ''
      }
      else if(platform === 'iOS'&&prop.platform === 'Android'){
        return ''
      }
      else if(platform === 'both'&&prop.platform !== undefined){
        return ''
      }
      else{
        return <PropsItem key={prop.name} data={prop}/>
      }

    })
    return (
        <div className="PropsList">
          <h4>{name}</h4>
          <div className="wrap">
            {items}
          </div>
        </div>
    )
  }
}

export default PropsList
