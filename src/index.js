import React from 'react';
import ReactDOM from 'react-dom';
import Home from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import $ from "jquery";
import About from './components/about/aboutPage'

class App extends component{
  render(){
    let Child

    switch (this.props.route){
      case 'about':
      Child = About;
      break;

      default:
      Child = Home;
    }
    return (
      <div>
        <Child />
      </div>
    );
  }
}

  ReactDOM.render(
    let route = window.location.hash.substr(1)
    <App route={route} />,
    document.getElementById('root')
  );

window.addEventListener('hashchange', render);
render()
