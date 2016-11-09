import React, { Component }  from 'react';
import logo from '../../public/img/logo.png';


class Header extends Component{
  render(){
    return (
      <div>
        <h1 className="text-center">{this.props.header}</h1>
        <div className="text-center">
          <img src={logo} alt="logo-donjon-jdr"/>
        </div>
      </div>
    )
  }
}

export default Header;