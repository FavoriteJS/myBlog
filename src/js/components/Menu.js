import React, { Component } from 'react';
import { Link } from 'react-router';
import NProgress from 'nprogress';
import { CONFIG } from '../constants/Config';

class Menu extends Component {
  render() {
    console.log(CONFIG)
    const url = `https://github.com/${CONFIG.owner}`;
    return (
      <div id="home">
        <div className="avatar">
          <a href={url}></a>
        </div>
        <h1>东东</h1>
        <div className="link">
          <Link to="all">全部</Link>
          <Link to="archive">归档</Link>
          <Link to="tags">标签</Link>
        </div>
      </div>
    );
  }
};

export default Menu;