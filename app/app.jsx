const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const Main = require('Main');
const Home = require('Home');
const About = require('About');

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('app')
);
