export const countPairsInt = `
/**
 * @TODO
 * Найдите числа с одинаковым количеством делителей
 * count_pairsInt(1, 50) -----> 8
 * Назовем, diff, разницу между двумя целыми числами, next и prev (diff = next - prev) и nMax, верхнюю
 * границу диапазона.
 * Нам нужна специальная функция count_pairsInt(), которая получает два аргумента, diff и nMax, и выводит
 * количество пар целых чисел, удовлетворяющих этому свойству, причем все они меньше (не меньше и не равных)
 * nMax.
*/

const findParsInt = (num) => {
  const nums = [1];

  if (num === 1) {
    return nums.length;
  }

  for (let i = 2; i * 2 <= num; i++) {
    if (num % i === 0 && i !== 1) {
      nums.push(i);
    }
  }

  nums.push(num);

  return nums.length;
};

const getParsIntPairs = (diff, nMax) => {
  const pairs = [];
  let itarations = 1;

  while (itarations > 0) {
    const next = itarations + diff;

    if (itarations + diff >= nMax) {
      break;
    }

    pairs.push([itarations, next]);

    itarations = itarations + 1;
  }

  return pairs;
};

const countPairsInt = (diff, nMax) => {
  let count = 0;
  const pairs = getParsIntPairs(diff, nMax);

  pairs.forEach(([prev, next]) => {
    const prevCount = findParsInt(prev);
    const nextCount = findParsInt(next);

    if (prevCount === nextCount) {
      count += 1;
    }
  });

  return count;
};

console.log("1,50 =>", countPairsInt(1,50)); // 8
console.log("3,100 =>", countPairsInt(3,100)); // 7

//<!!>

const time = window.performance.now();
const result = {
  'countPairsInt(1,50) =>': countPairsInt(1,50),
  'countPairsInt(3,100) =>': countPairsInt(3,100),
}
return { ...result, timeEnd: window.performance.now() - time }
`;
