var React = require('react');

module.exports = React.createClass({

  handleClick: function(){
    alert('hellow');
  },

  render: function(){
    console.log(this.props);
    return <div onClick={this.handleClick} className="col-xs-6 col-md-3">
      <div className="thumbnail">
      <div className="media">
        <a className="pull-left">
          <img className="media-object" src={this.props.thumb} />
        </a>
        <div className="media-body">
          <h4 className="media-heading">{this.props.name}</h4>
        </div>
        <div>
          <audio ref="audio_tag" src={this.props.audio} controls />
        </div>
      </div>
      </div>
    </div>
  }
});