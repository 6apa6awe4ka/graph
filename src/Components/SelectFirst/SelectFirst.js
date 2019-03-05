import React, {Component} from 'react';
import {connect} from 'react-redux';
import graph from '../../Data/graph.json';

const nodes = Object.keys(graph);

class SelectFirst extends Component
{
  handle = (event) =>
  {
    this.props.addFirstNode(event.target.value);
  }
  render()
  {
    return(
      <div>
        <select value={this.props.FirstNode} onChange={this.handle}>
          {
            nodes.map(value =>
              <option value = {value} key = {value} >{value}</option>
            )
          }
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    FirstNode: state.FirstNode
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFirstNode: (FirstNode) => {
      dispatch({
        type: 'CHANGE_FIRST_NODE',
        payload: FirstNode
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectFirst);