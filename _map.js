const weapons = ['candlestick', 'lead pipe', 'revovler'];

const makeBroken = function (item) {
  return `broken ${item}`;
};

const _ = {};

_.map = function (list, callback) {
  let storage = [];
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      storage.push(callback(list[i], i, list)); //! something weird for me
    }
  }
  return storage;
};

console.log(_.map(weapons, makeBroken));