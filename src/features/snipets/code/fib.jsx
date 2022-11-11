export const fib = `
// динамическое програмирование
function dynamicFib(n) {
  const map = [1, 1]

  for (i = 2; i < n; i++) {
    map[i] = map[i - 1] + map[i - 2];
  }

  return map[n - 1] + map[n - 2]
}

// Через рекурсию без кеша - не динамическое
function fibR(n) {
 if (n < 2) return 1;
 else return fibR(n - 1) + fibR(n - 2);
}
`;
