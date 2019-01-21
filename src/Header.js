import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="primary">
          <div className="left">
            <ul>
              <li>Iste Natus</li>
              <li>Explicabo</li>
              <li>Omnis</li>
              <li>Ipsa Quae</li>
              <li className="active">Perspiciatis Unde</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>Veris Veritatus <i className="fas fa-angle-down"></i></li>
              <li><span>Z</span></li>
            </ul>
          </div>
        </nav>

        <nav className="secondary">
          <div className="left">
            <ul>
              <li><span className="big">Sunt</span></li>
              <li><i className="big fas fa-chevron-circle-down"></i> <span>Beatae Vita</span></li>
              <li>Doloremque laudantium otam Doloremque laudauntium otam</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li><i class="big fas fa-trash"></i> <span className="">Archieto</span></li>
              <li><i class="big fas fa-toggle-off"></i> <span className="">Aperiam</span></li>
              <li><i class="big fas fa-toggle-on"></i><span className="">Totam</span></li>
              <li><i class="big fas fa-envelope"></i><span className="">Rem</span></li>

            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
