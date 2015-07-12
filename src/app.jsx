var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
      imageHref: "http://thecatapi.com",
      imageUrl: "http://thecatapi.com/api/images/get?format=src&type=jpg"
    }, {
      imageHref: "http://thecatapi.com",
      imageUrl: "http://thecatapi.com/api/images/get?format=src&type=jpg"
    }, {
      imageHref: "http://thecatapi.com",
      imageUrl: "http://thecatapi.com/api/images/get?format=src&type=jpg"
    }, {
      imageHref: "http://thecatapi.com",
      imageUrl: "http://thecatapi.com/api/images/get?format=src&type=jpg"
    }]
  };

  var element = React.createElement(ThumbnailList, options)
  React.render(element, document.getElementById('container'));