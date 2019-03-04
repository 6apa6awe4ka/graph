import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var weights={
  1:{2:1,5:9},
  2:{1:1,3:1,6:9},
  3:{2:1,4:1,6:9},
  4:{3:1,5:2,6:9},
  5:{1:9,4:2,6:10},
  6:{2:9,3:9,4:9,5:10}
};
const first=2;
const last=6;

var graph={
  arr:weights,
  w:{},
  l:{},
  // b:{}
};

graph.arr=weights;
for(var i in weights)
{
  // graph.b[i]=false;
  graph.w[i]=1000000;
}

graph.w[first]=0;
graph.l[first]=[first];

// function f(graph,k)
// {
//   var b=graph.b;
//   if(b[k])
//     return;
//   b[k]=true;

//   var arr=graph.arr;
//   var w=graph.w;
//   var l=graph.l;

//   for(var i in arr[k])
//   {
//     var v=w[k]+arr[k][i];
//     if(v<w[i])
//     {
//       l[i]=[...l[k]];
//       l[i].push(i);
//       if(w[i]<1000000)
//       {
//         for(var j in arr[i])
//         {
//           if(j!=i)
//           {
//             var vv=v+arr[i][j];
//             if(vv<w[j])
//             {
//               w[j]=v+arr[i][j];//l
//               l[j]=[...l[i]];
//               l[j].push(j);//false ... алгоритм может успеть посчитать ноду до этого и не пeресчитает ноды за ней  
//               b[j]=false;//достаточно ли???            
//             }
//           }
//           // f(graph,j);//надо ли?
//         }
//       }
//       w[i]=v;
//     }
//     f(graph,i);
//   }
// }

function f(graph,m)
{
  if(!m[0])
  {
    return;
  }
  var {arr,w,l}=graph;
  var mm=[];

  for(var n in m)
  {
    var k=m[n];
    for(var i in arr[k])
    {
      var v=w[k]+arr[k][i];
      if(v<w[i])
      {
        l[i]=[...l[k]];
        l[i].push(i);
        w[i]=v;
        mm.push(i);
      }
    }
  }
  f(graph,mm);
}

f(graph,[first]);

console.log(graph);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {graph.w[6]}     
        </header>
      </div>
    );
  }
}

export default App;