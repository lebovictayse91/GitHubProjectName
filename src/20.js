function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1, result = 0;
  while (result < n) {
    [a, b] = [b, a + b];
    result++;
  }
  return b;
}
