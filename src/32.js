function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0;
  let b = 1;
  let sum = a + b;
  for (let i = 2; i < n; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  return sum;
}
