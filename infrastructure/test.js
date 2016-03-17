var _ = require('lodash');
var baseConf = require('./base');

var test = {
    name: 'amazon-test1',
};

baseConf.configurator(_.merge({}, baseConf.base, test));