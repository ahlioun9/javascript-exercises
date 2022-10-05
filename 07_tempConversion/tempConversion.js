const ftoc = function(t) {
  return Number(((t - 32) * (5/9.0)).toFixed(1));
};

const ctof = function(t) {
  return Number((t * (9/5.0) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
