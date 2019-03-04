import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {calculate} from './lib.js'

function WayList(props)
{
  const l=props.lists;
  const last=props.last;
  return(l[last].map((node) =>
    <li key={node}>
      {node}
    </li>
  ));
}

class App extends Component {
  constructor(props)
  {
    super(props);

    var calculated=calculate(props.graph, props.first);

    this.state={
      graph:props.graph,
      first:props.first,
      last:props.last,
      weights:calculated.weights,
      lists:calculated.lists
    };

    this.handleChangeLast = this.handleChangeLast.bind(this);
    this.handleChangeFirst = this.handleChangeFirst.bind(this);
  }
  handleChangeLast(event)
  {
    var e=event.target.value;
    if(e<7 && e>0)
      this.setState({
        last: e
      });
    else
      alert("Введите целое число от 1 до 6");
  }
  handleChangeFirst(event)
  {
    var e=event.target.value;
    if(e<7 && e>0)
    {
      var calculated=calculate({...this.state.graph},e);
      this.setState({
        first:event.target.value,
        weights:calculated.weights,
        lists:calculated.lists
      });
    }
    else
      alert("Введите целое число от 1 до 6");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" value={this.state.first} onChange={this.handleChangeFirst}/>
          <input type="text" value={this.state.last} onChange={this.handleChangeLast} />
          {this.state.weights[this.state.last]}
          <WayList lists={this.state.lists} last={this.state.last} />     
        </header>
      </div>
    );
  }
}

export default App;