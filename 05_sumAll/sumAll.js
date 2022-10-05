const sumAll = function(n, m) {
  if (typeof n != 'number' || typeof m != 'number' || n < 0 || m < 0) {
    return 'ERROR';
  } 

  if (n > m) {
    let tmp = n;
    n = m;
    m = tmp;
  }
  let sum = 0;
  for (let i = n; i <= m; i++)
    sum += i;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
