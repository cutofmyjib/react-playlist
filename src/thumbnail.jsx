var React = require('react');

module.exports = React.createClass({
  render: function(){
    return <div className="col-xs-6 col-md-3">
  <a href={this.props.imageHref} className="thumbnail">
    <img src={this.props.imageUrl} />
  </a>
</div>
  }
});