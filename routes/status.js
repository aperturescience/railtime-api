'use strict';

var express   = require('express'),
    request   = require('request'),
    router    = express.Router(),
    ex        = require('../lib/error'),
    maps      = require('../maps/status'),
    OAuth     = require('../lib/oauth');

/* GET status */
router.get('/', function(req, res, next) {

  request.get(new OAuth('RetrieveStatus'), function(err, resp, body) {

    if (err || resp.statusCode !== 200) {
      return res.json(500, new ex.RailtimeException('Could not retrieve status'));
    }

    res.json(maps.mapStatus(body));
  });

});

module.exports = router;
