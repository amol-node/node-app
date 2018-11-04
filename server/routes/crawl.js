var express = require('express');
var router = express.Router();
var crawl = require("./../controller/Crawl");

router.route("/crwal")
    .get(crawl.getCrawlPage);
    
module.exports = router;