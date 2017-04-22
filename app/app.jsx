const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const Main = require('Main');
const Home = require('Home');
const About = require('About');
const Contact = require('Contact');

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('app')
);
