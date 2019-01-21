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
              <li><a href="#">Iste Natus</a></li>
              <li><a href="#" >Explicabo</a></li>
              <li><a href="#" >Omnis</a></li>
              <li><a href="#" >Ipsa Quae</a></li>
              <li className="active"><a href="#" >Perspiciatis Unde</a></li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li><a href="#">Veris Veritatus <i className="fas fa-angle-down"></i> </a></li>
              <li><a href="#"><span>Z</span></a></li>
            </ul>
          </div>
        </nav>

        <nav className="secondary">
          <div className="left">
            <ul>
              <li><a href="#"><span className="big">Sunt</span></a></li>
              <li><a href="#"><i className="big fas fa-chevron-circle-down"></i> <span>Beatae Vita</span></a></li>
              <li>Doloremque laudantium otam Doloremque laudauntium otam</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li><a href="#"><i class="big fas fa-trash"></i> <span className="">Archieto</span></a></li>
              <li><a href="#"><i class="big fas fa-toggle-off"></i> <span className="">Aperiam</span></a></li>
              <li><a href="#"><i class="big fas fa-toggle-on"></i><span className="">Totam</span></a></li>
              <li><a href="#"><i class="big fas fa-envelope"></i><span className="">Rem</span></a></li>

            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
