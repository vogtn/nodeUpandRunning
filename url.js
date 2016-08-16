var URL = require('url');
var myUrl = "http://www.nodejs.org/some/url/?with=query&param=that&are=awesome#alsohash";

var parsedUrl = URL.parse(myUrl);
