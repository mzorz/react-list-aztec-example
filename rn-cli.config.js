
const path = require('path');
// const blacklist = require('./node_modules/react-native/node_modules/metro/src/blacklist');
const blacklist = require('./node_modules/metro/src/blacklist');

module.exports = {
  getProjectRoots() {
    return [__dirname];
    // return [__dirname, path.resolve(__dirname, '../react-native-recyclerview-list'), path.resolve(__dirname, '../react-native-aztec')];
    //return [__dirname, path.resolve(__dirname, '../react-native-recyclerview-list')];
  },
  getBlacklistRE: function() {
    return blacklist([/example/]);
    //return blacklist([/react-native-recyclerview-list\/example/]);
    //react-native-recyclerview-list/example
  },
};
