module.exports = function check(str, bracketsConfig) {
  let arrayFromStr = str.split("");

  for (let i = 0; i < bracketsConfig.length; i++) {
    let array = bracketsConfig[i];

    for (let j = 0; j < arrayFromStr.length; j++) {
      if (arrayFromStr[j] == array[0] && arrayFromStr[j + 1] == array[1]) {
        arrayFromStr.splice(j, 2);
        j = j - 2;
        i = -1;
        if (arrayFromStr.length) {
          return false;
        }
      }
    }
  }

  return true;
};
