const fibs = {};
export function fibonacci(n) {
  if (fibs[n]) return fibs[n];

  if (n < 2) {
    return n;
  }

  const fib = fibonacci(n - 1) + fibonacci(n - 2);
  fibs[n] = fib;
  return fib;
}
