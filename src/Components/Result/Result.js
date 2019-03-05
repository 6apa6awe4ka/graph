import React from 'react';
import { connect } from 'react-redux';

const WayList = ({list}) =>
{
  return(list.map((node) =>
    <li key={node}>
      {node}
    </li>
  ));
}

const Result = ({ weight, list }) => {
  return (
    <div>
      <span> {WayList({list})} </span>
      <span> {weight} </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    LastNode: state.LastNode,
    weight: state.weights[state.LastNode],
    list: state.lists[state.LastNode]
  }
}

export default connect(mapStateToProps)(Result);