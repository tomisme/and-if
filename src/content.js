import _ from 'lodash';

const links = document.getElementsByTagName('link');

_.filter(links, function(element) {
  const isLink = element.hasAttribute('href');
  const isRssLink = element.getAttribute('type') === 'application/rss+xml';

  return isLink && isRssLink;
})

.forEach(function(element) {
  console.log(element);
});
