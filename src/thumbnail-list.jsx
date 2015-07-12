var React = require('react');
var Thumbnail = require('./thumbnail');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = "https://react-playlist.firebaseio.com/7/stories/";

module.exports = React.createClass({
  mixins: [ ReactFire ],

  getInitialState: function(){
    return {stories: []};
  },

  componentWillMount: function(){
    this.bindAsArray(new Firebase(rootUrl), "stories");
  },

  render: function(){
    data = this.state.stories;
    console.log(data);
    var list = data.map(function(thumbnailProps){
      return <Thumbnail {...thumbnailProps}/>
    });
    return <div>
      {list}
    </div>
  }
});
