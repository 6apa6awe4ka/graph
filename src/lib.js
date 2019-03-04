export function calculate(graph,first)
{
  var w={};
  var l=[];
  for(var i in graph)
  {
    w[i]=1000000;
  }
  w[first]=0;
  l[first]=[first];

  f(graph,w,l,[first]);
  return {weights:w, lists:l};
}

function f(arr,w,l,m)
{
  if(!m[0])
  {
    return;
  }
  var mm=[];
  var b={};

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
        if(!b[i])
        {
          mm.push(i);
          b[i]=true;
        }
      }
    }
  }
  f(arr,w,l,mm);
}
//{m, mm} - массив нод на обработку
//arr - матрица ребер
//w - расстояние до ноды от стартовой
//l - массив кратчайшего пути
//b - проверка, добавили ли уже ноду в mm
// function f(arr,w,l,m