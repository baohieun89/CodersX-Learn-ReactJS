import React,{ Component, Fragment} from 'react';
import './style/TabMenu.css'
class TabMenu extends Component{
  render() {
    
    return(
      <div className="TabMenu">
        <div className="Home item">
          <div className="icon"><img src={this.props.items[0].icon} /></div>
          {this.props.items[0].label}
        </div>
        <div className="item">
          <div className="icon"><img src={this.props.items[1].icon} /></div>
          {this.props.items[1].label}
        </div>
        <div className="item">
          <div className="icon"><img src={this.props.items[2].icon}/></div>
          {this.props.items[2].label}
        </div>
        <div className="item">
          <div className="icon"><img src={this.props.items[3].icon} /></div>
          {this.props.items[3].label}
        </div>
        <div className="item">
          <div className="icon"><img src={this.props.items[4].icon} /></div>
          {this.props.items[4].label}
        </div>

      </div>
      
    );
  }
}

export default TabMenu;