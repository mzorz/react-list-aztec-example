
const path = require('path');
const blacklist = require('./node_modules/react-native/node_modules/metro/src/blacklist');

module.exports = {
  getProjectRoots() {
    // return [__dirname, path.resolve(__dirname, '..')];
    return [__dirname, path.resolve(__dirname, '../react-native-recyclerview-list')];
  },
  getBlacklistRE: function() {
    //return blacklist([/example/]);
    return blacklist([/example/]);
    //react-native-recyclerview-list/example
  },
  getProvidesModuleNodeModules() {
    return [
      'react-native',
      'react',
      'prop-types'
    ];
  },
};
