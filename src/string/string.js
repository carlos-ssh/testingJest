module.exports = {
  stringLength(str) {
    if (str.length <= 1 || str.length >= 10) {
      return 'This string is out of range';
    } else {
      return 'This string is in range';
    }
  }
};

