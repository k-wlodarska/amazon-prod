var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var prod = { name: 'amazon-prod',
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: { MONGOLAB_URI: 'mongodb://heroku_3fk7nns1:8s3s3i4ju7e4n827hoh8nk3jc2@ds013619.mlab.com:13619/heroku_3fk7nns1' },
    addons: {},
    collaborators:
        [ 'damian.rawski@schibsted.pl',
            'katarzyna.wlodarska@schibsted.pl' ],
            features:
    { 'runtime-dyno-metadata': { enabled: false },
        'log-runtime-metrics': { enabled: false },
        'http-session-affinity': { enabled: false },
        preboot: { enabled: false },
        'http-shard-header': { enabled: false },
        'http-end-to-end-continue': { enabled: false } },
    formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
        log_drains: [],
    domains: [ 'amazon-prod.herokuapp.com' ] }

configurator(prod);