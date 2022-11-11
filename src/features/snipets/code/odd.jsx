export const odd = `
/**
 * @TODO
 * выполнить сортировку - четные числа оставить на месте
 * нечетные сортировать по возрстанию
 *
 * Можно надампать массив четных чисел [number, index]
 * и массив нечетных чисел [number] - после всего цикла - отсортировать его
 *
 * вторым циклом пройтись по четным числам и взять их индекс
 * заменив при этом в исходном массиве число по индексу, а старое число подвинуть вперед
 */
function sotrOddNumbers(arr) {
  const result = [];
  const evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    const isEvenNumber = arr[i] % 2 === 0;

    if (isEvenNumber) {
      evenNumbers.push([arr[i], i]);
    } else {
      result.push(arr[i]);
    }
  }

  result.sort((a, b) => a - b);

  for (let j = 0; j < evenNumbers.length; j++) {
    const [number, index] = evenNumbers[j];

    result[index + 1] = result[index];
    result[index] = number;
  }

  return result;
}

console.log(sotrOddNumbers([5, 2, 4, 2, 3])); // 3/2/4/2/5
console.log(sotrOddNumbers([5, 2, 2, 3])); // 3/2/2/5
console.log(sotrOddNumbers([5, 2, 2, 30, 12, 12, 15])); // 5 2 2 30 12 12 15

//<!!>

const time = window.performance.now();
const result = {
  'sotrOddNumbers([5, 2, 4, 2, 3]) =>': sotrOddNumbers([5, 2, 4, 2, 3]),
  'sotrOddNumbers([5, 2, 2, 3]) =>': sotrOddNumbers([5, 2, 2, 3]),
  'sotrOddNumbers([5, 2, 2, 30, 12, 12, 15]) =>': sotrOddNumbers([5, 2, 2, 30, 12, 12, 15]),
}
return { ...result, timeEnd: window.performance.now() - time }
`;
