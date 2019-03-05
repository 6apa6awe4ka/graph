import {calculate} from '../../lib';
import graph from '../../Data/graph.json'

var calculated=calculate(graph, '1');

const initialState = {
  FirstNode: '1',
  LastNode: '6',
  weights: calculated.weights,
  lists: calculated.lists
}

const reducer = (state = initialState, action) =>
{
  if(action.type === 'CHANGE_FIRST_NODE')
  {
    calculated=calculate(graph, action.payload);
    return {
      ...state,
      FirstNode: action.payload,
      weights: calculated.weights,
      lists: calculated.lists
    };
  }
  if(action.type === 'CHANGE_LAST_NODE')
  {
    return {
      ...state,
      LastNode: action.payload
    };
  }
  return state;
};


export default reducer;