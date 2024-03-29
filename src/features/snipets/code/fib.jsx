export const fib = `
// динамическое програмирование
function dynamicFib(n) {
  const map = [1, 1]

  for (i = 2; i < n; i++) {
    map[i] = map[i - 1] + map[i - 2];
  }

  return map[n - 1] + map[n - 2]
}

// Через рекурсию с кешем
const fibCash = (n, memo) => {
  memo = memo ?? {}

  if(memo[n]) {
    return memo[n]
  }

  if(n < 0 ) {
    return 0
  }

  if(n <=2  ) {
    return 1
  }

  memo[n] = fibCash(n -1, memo) + fibCash(n -2, memo)

  return memo[n]
}

// Через рекурсию без кеша - не динамическое
function fibR(n) {
 if (n < 2) return 1;
 else return fibR(n - 1) + fibR(n - 2);
}

//<!!>

const time = window.performance.now();
const result = {
  'dynamicFib(12) =>': dynamicFib(12),
  'fibR(12) =>': fibR(12),
  'fibCash(12) =>': fibCash(12),
}
return { ...result, timeEnd: window.performance.now() - time }
`;
