import React,{ Component, Fragment} from 'react';

class TodoItem extends Component{
  render() {
    
    return(
      <div className="TodoItem">
        <p>{this.props.title[1].name}</p>
      </div>
      
    );
  }
}

export default TodoItem;