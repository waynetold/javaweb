import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo" style={{}}>
        <Link to="/" className="logo-text">
          校友管理系统
        </Link>
      </div>
    );
  }
}
