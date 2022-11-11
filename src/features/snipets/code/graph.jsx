export const graph = `
/**
 * @TODO
 *
 * найти все доступные тройки
 * сделать граф - составить его соседей и посчитать кол-во соседей у ребенка - это и будут тройки
 */

function createGraph(arr, r) {
  const graph = {};

  for (let i = 0; i < arr.length; i += 1) {
    const ratio = arr[i] * r;

    const siblings = [];

    for (let v = i + 1; v < arr.length; v += 1) {
      if (arr[v] === ratio) {
        siblings.push(v);
      }
    }

    graph[i] = siblings;
  }

  return graph;
}

function countTriplets(graph) {
  let tripletCounter = 0;

  for (let vertex in graph) {
    const siblings = graph[vertex];

    for (let i = 0; i < siblings.length; i++) {
      if (siblings) {
        tripletCounter += graph[siblings[i]].length;
      }
    }
  }

  return tripletCounter;
}

console.log(countTriplets(createGraph([1, 1, 1, 1, 1], 1))); // 10

//<!!>

const time = window.performance.now();
const result = {
  'countTriplets(createGraph([1, 1, 1, 1, 1], 1)) =>': countTriplets(createGraph([1, 1, 1, 1, 1], 1)),
}
return { ...result, timeEnd: window.performance.now() - time }
`;
