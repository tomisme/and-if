'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _import = require('lodash');

var _import2 = _interopRequireWildcard(_import);

var links = document.getElementsByTagName('link');

_import2['default'].filter(links, function (element) {
  var isLink = element.hasAttribute('href');
  var isRssLink = element.getAttribute('type') === 'application/rss+xml';

  return isLink && isRssLink;
}).forEach(function (element) {
  console.log(element);
});
