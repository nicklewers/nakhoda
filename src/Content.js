import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Content extends Component {
  render() {
    return (
      <div>
      <h2 className="title active"><i className="fas fa-check tick"></i>CSed ut perspiciatis unde</h2>
      <p>Set ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, total rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beaatae vitae dicta sunt explicabo.</p>
      <br /><br />
      <div className="row">
        <div className="quarter">
          <ul>
            <li>Otam rem aperiam</li>
            <li>Ipsa quae</li>
            <li>Unde omnis</li>
            <li>Voluptatem</li>
          </ul>
        </div>
        <div className="quarter">
          <ul>
            <li>Perspiciatis Unde</li>
            <li>Architecto beatae vitae</li>
            <li>Perspiciatis Unde</li>
            <li>Architecto beatae vitae</li>
          </ul>
        </div>
        <div className="quarter">
          <ul>
            <li>architecto beatae vitae</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="quarter">
          <ul>
            <li>Totam</li>
            <li>Iste Natus</li>
            <li>Omnis Iste Natus Erro</li>
            <li>Explicabo</li>
          </ul>
        </div>
        <div className="quarter">
          <ul>
            <li>5.0</li>
            <li>Omnis iste natus</li>
            <li>Accusantium doloremque laudant</li>
            <li>Accusantium dolor</li>
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default Content;
