module.exports = function check(str, bracketsConfig) {
  let arrStr = str.split("");

  for (let i = 0; i < bracketsConfig.length; i++) {
    let arr = bracketsConfig[i];

    for (let j = 0; j < arrStr.length; j++) {
      if (arrStr[j] == arr[0] && arrStr[j + 1] == arr[1]) {
        arrStr.splice(j, 2);
        j -= 2;
        i = -1;
        if (!arrStr.length) {
          return true;
        }
      }
    }
  }

  return false;
};
