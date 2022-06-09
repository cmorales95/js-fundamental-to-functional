const _ = {};

_.each = function (list, callback) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    // object is received
    for (let key in list) {
      callback(list[key], key, list);
    }
  }
};

_.each(['sally', 'georgie', 'porgie'], function (name, i, list) {
  if (!list[i + 1]) {
    console.log(name, 'is the oldest');
    return;
  }

  console.log(name, 'is younger than', list[i + 1]);
});


_.map = function (list, callback) {
  let storage = [];
  _.each(list, function (value, i, list) {
    storage.push(callback(value, i, list));
  });

  return storage;
};

const weapons = ['candlestick', 'lead pipe', 'revovler'];

const makeBroken = function (item) {
  return `broken ${item}`;
};

console.log(_.map(weapons, makeBroken));

_.filter = function (list, callback) {
  const storage = [];
  _.each(list, function (value, i, list) {
    if (callback(list[i], i, list)) storage.push(list[i]);
  });

  return storage;
};

const videoData = [{
  name: 'Miss Scarlet',
  present: true,
  rooms: [{kitchen: false}, {ballroom: false}, {conservatory: false}, {'dining room': false}, {'billiard room': false}, {library: false}]
}, {
  name: 'Mrs. White',
  present: false,
  rooms: [{kitchen: false}, {ballroom: false}, {conservatory: false}, {'dining room': false}, {'billiard room': false}, {library: false}]
}, {
  name: 'Reverend Green',
  present: true,
  rooms: [{kitchen: false}, {ballroom: false}, {conservatory: false}, {'dining room': false}, {'billiard room': false}, {library: false}]
}, {
  name: 'Rusty',
  present: false,
  rooms: [{kitchen: false}, {ballroom: false}, {conservatory: false}, {'dining room': false}, {'billiard room': false}, {library: false}]
}, {
  name: 'Colonel Mustard',
  present: true,
  rooms: [{kitchen: false}, {ballroom: false}, {conservatory: false}, {'dining room': false}, {'billiard room': false}, {library: false}]
}, {
  name: 'Professor Plum',
  present: true,
  rooms: [{kitchen: false}, {ballroom: false}, {conservatory: false}, {'dining room': false}, {'billiard room': false}, {library: false}]
}];

let suspects = _.filter(videoData, function (item) {
  return item.present;
});

console.log(suspects);

_.reduce = function (list, cb, initial) {
  let memo = initial;
  for (let i = 0; i < list.length; i++) {
    if (i === 0 && memo === undefined) {
      memo = list[0];
      continue;
    }

    memo = cb(list[i], memo);
  }
  return memo;
};

console.log(_.reduce([2, 3, 5], (v, sum) => v + sum));

const newDevelopment = [{
  name: 'Miss Scarlet',
  present: true,
  rooms: [{kitchen: false}, {ballroom: false}, {conservatory: true}, {'dining room': true}, {'billiard room': false}, {library: true}]
}, {
  name: 'Reverend Green',
  present: true,
  rooms: [{kitchen: true}, {ballroom: false}, {conservatory: false}, {'dining room': false}, {'billiard room': true}, {library: false}]
}, {
  name: 'Colonel Mustard',
  present: true,
  rooms: [{kitchen: false}, {ballroom: false}, {conservatory: true}, {'dining room': false}, {'billiard room': true}, {library: false}]
}, {
  name: 'Professor Plum',
  present: true,
  rooms: [{kitchen: true}, {ballroom: false}, {conservatory: false}, {'dining room': true}, {'billiard room': false}, {library: false}]
}];


const notInRooms = _.reduce(newDevelopment, (suspect, memo) => {
  const emptyRooms = _.filter(suspect.rooms, room => {
    return !Object.values(room)[0];
  });

  const keysEmptyRoom = _.map(emptyRooms, room => {
    return Object.keys(room)[0];
  });

  _.each(keysEmptyRoom, room => {
    for (let value of memo) {
      if (value === room) {
        return;
      }
    }
    memo.push(room);
  });

  return memo;
}, []);
console.log(notInRooms);

