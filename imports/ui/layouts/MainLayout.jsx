import React from 'react';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="main">
        {this.props.content}
      </div>
    );
  }
}
