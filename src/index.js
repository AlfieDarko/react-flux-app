import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/homePage.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
//$ = jQuery = require("jquery");
import Authors from './components/authors/authorPage.js'
import About from './components/about/aboutPage.js'
import Header from './components/common/header.js'

class App extends React.Component{
  render(){
    var Child

    switch (this.props.route){
      case 'about':
      Child = About;
      break;

      case 'authors':
      Child = Authors;
      break;

      default:
      Child = Home;
    }
    return (
      <div>
        <Header />
        <Child />
      </div>
    );
  }
}

function render() {
  var route = window.location.hash.substr(1)
  ReactDOM.render(<App route={route} />, document.getElementById('root'))
}

window.addEventListener('hashchange', render);
render()
