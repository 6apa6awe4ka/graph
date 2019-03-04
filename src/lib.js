export function calculate(graph,first)
{
  var weights={};
  var lists=[];
  for(var i in graph)
  {
    weights[i]=1000000;
  }
  weights[first]=0;
  lists[first]=[first];

  f(graph,weights,lists,[first]);
  return {weights:weights, lists:lists};
}

function f(graph,weights,lists,init_nodes_array)
{
  if(!init_nodes_array[0])
  {
    return;
  }
  var next_init_nodes_array=[];
  var marked_nodes={};

  for(var n in init_nodes_array)
  {
    var k=init_nodes_array[n];
    for(var i in graph[k])
    {
      var v=weights[k]+graph[k][i];
      if(v<weights[i])
      {
        lists[i]=[...lists[k]];
        lists[i].push(i);
        weights[i]=v;
        if(!marked_nodes[i])
        {
          next_init_nodes_array.push(i);
          marked_nodes[i]=true;
        }
      }
    }
  }
  //тут можно отсортировать next_init_nodes_array по возрастанию weights[next_init_nodes_array[i]]
  f(graph,weights,lists,next_init_nodes_array);
}
//{init_nodes_array, next_init_nodes_array} - массив нод на обработку
//graph - матрица ребер
//weights - расстояние до ноды от стартовой
//lists - массив кратчайшего пути
//marked_nodes - проверка, добавили ли уже ноду в next_init_nodes_array