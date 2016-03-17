var _ = require('lodash');
var baseConf = require('./base');

var prod = {
    name: 'amazon-prod',
    domains: [ 'amazon-prod.herokuapp.com' ]
};

baseConf.configurator(_.merge({}, baseConf.base, prod));
