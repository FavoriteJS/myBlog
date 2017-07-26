import React, { Component } from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createHashHistory } from 'history';
import { CONFIG } from '../constants/Config.js';
import NProgress from 'nprogress'; //进度条插件

import Menu from '../components/Menu.js';
import App from '../containers/App.js';

import '../../css/reset.scss';
import '../../css/fonts.scss';
import '../../css/index.scss';
import '../../css/list.scss';
import '../../css/nprogress.scss';

setTimeout(function(){
  debugger
  //利用iframe的onload事件刷新页面
  document.title = CONFIG.title;
  var iframe = document.createElement('iframe');
  iframe.style.visibility = 'hidden';
  iframe.style.width = '1px';
  iframe.style.height = '1px';
  iframe.onload = function () {
    setTimeout(function () {
      document.body.removeChild(iframe);
    }, 0);
  };
  document.body.appendChild(iframe);
},0);

const appHistory = useRouterHistory(createHashHistory)();

var All = (location, cb) => {
  document.title = CONFIG.titleLoad;
  NProgress.start();
  require.ensure([], require => {
    cb(null, require('../containers/All.js').default);
  }, 'all');
};

var Archive = (location, cb) => {
  document.title = CONFIG.titleLoad;
  NProgress.start();
  require.ensure([], require => {
    cb(null, require('../containers/Archive.js').default);
  }, 'archive');
};

var Tags = (location, cb) => {
  document.title = CONFIG.titleLoad;
  NProgress.start();
  require.ensure([], require => {
    cb(null, require('../containers/Tags.js').default);
  }, 'tags');
};

var Post = (location, cb) => { // 异步加载组件
  document.title = CONFIG.titleLoad;
  NProgress.start();
  require.ensure([], require => {
    cb(null, require('../containers/Post.js').default);
  }, 'post');
};

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Menu} />
    <Route path="all" getComponent={All} />
    <Route path="archive" getComponent={Archive} />
    <Route path="tags" getComponent={Tags} />
    <Route path="post/:id" getComponent={Post} />
  </Route>
);

export default class Root extends Component {
  render() {
    return <Router history={appHistory} routes={routes} />
  }
};