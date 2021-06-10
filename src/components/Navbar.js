import React, { Component } from 'react';
import dice_logo from '../logos/dice_logo.png';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light fixed-top bg-light flex-md-nowrap p-0 shadow text-monospace">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://github.com/devcover"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={dice_logo} height="32" alt="logo" />
          Ether Dice
        </a>
        {!this.props.account ? <div id="loader" className="spinner-border text-light" role="status"></div> :
          <li className="nav-item text-dark text-nowrap d-none d-sm-none d-sm-block">
            <a
              className="text-dark"
              href={"https://rinkeby.etherscan.io/address/" + this.props.account}
              target="_blank"
              rel="noopener noreferrer"
            >
              {(this.props.account)}
            </a>&nbsp;
          </li>
        }
      </nav>
    );
  }
}

export default Navbar;