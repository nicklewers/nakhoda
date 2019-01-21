import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Util extends Component {
  render() {
    return (
      <div className="utilBox">
        <div className="labels">
          <div className="quarter muted">
            Perspiciatis Unde
          </div>
          <div className="quarter active">
            Accusantium doloremque laudant
          </div>
          <div className="quarter ">
            Voluptatem (duvrnem)
          </div>
        </div>
        <div className="row">
          <div className="eighth muted">
            Iste Natus
          </div>
          <div className="searchBoxContainer">
            <span className="searchBox">
              Accusantium doloremque laudant <i className="fas fa-angle-up"></i>
              <div className="dropDown">
                <ul>
                  <li>Architecto beatae vitae</li>
                  <li className="selected">Architecto beatae vitae</li>
                  <li>Architecto beatae vitae</li>
                  <li>Architecto beatae vitae</li>
                  <li>Architecto beatae vitae</li>
                  <li>Architecto beatae vitae</li>
                  <li>Architecto beatae vitae</li>
                </ul>
              </div>
            </span>
          </div>
          <div className="eighth active">
            <div className="quarter">
            </div>
            Unde omnis
          </div>
        </div>

      </div>
    );
  }
}

export default Util;
