module.exports = function check(str, bracketsConfig) {
  let arrFromString = str.split("");

  for (let i = 0; i < bracketsConfig.length; i++) {
    let array = bracketsConfig[i];

    for (let j = 0; j < arrFromString.length; j++) {
      if (arrFromString[j] == array[0] && arrFromString[j + 1] == array[1]) {
        arrFromString.splice(j, 2);
        j -= 2;
        i = -1;
        if (!arrFromString.length) {
          return true;
        }
      }
    }
  }

  return false;
};
