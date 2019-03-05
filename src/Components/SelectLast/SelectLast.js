import React, {Component} from 'react';
import {connect} from 'react-redux';
import graph from '../../Data/graph.json';
const nodes = Object.keys(graph);
// var selected =  (this.props.LastNode == value ) ? 'selected' : '';

class SelectLast extends Component
{
  handle = (event) =>
  {
    this.props.addLastNode(event.target.value);
  }
  render()
  {
    return(
      <div>
        <select value={this.props.LastNode} onChange={this.handle}>
          {
            nodes.map(value =>
              <option value={value} key={value} >{value}</option>
            )
          }
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    LastNode: state.LastNode
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addLastNode: (LastNode) => {
      dispatch({
        type: 'CHANGE_LAST_NODE',
        payload: LastNode
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectLast);