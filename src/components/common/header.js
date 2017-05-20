import React from 'react'
import logo from '../../images/pluralsight-logo.png';

class Header extends React.Component{
  render(){

    var imgstyle = {
      maxHeight: 20,
      padding: 0
    }
    return(
      <nav className="navbar navbar-default">
        <div className="container">
          <a href="/" className="navbar-brand">
          <img src={logo} alt="logo" style={imgstyle}/>
          </a>
          <ul className="nav navbar-nav">
            <li><a href='/'>Home </a></li>
            <li><a href="/#authors">Authors</a></li>
            <li><a href='/#about'> About</a> </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
