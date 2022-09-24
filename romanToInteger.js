var romanToInt = function(s) {
  const romToInt = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let int = 0;

  for (let i = 0; i < s.length; i++) {

    if (romToInt[s[i]] < romToInt[s[i+1]]) {

      int += romToInt[s[i+1]] - romToInt[s[i]];
      i++
    } else {
      int += romToInt[s[i]];
    }

  }

  return int;
};