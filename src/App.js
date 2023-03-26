import React, { useState } from 'react';
import './style.css';

export default function App() {
  return (
    <>
      <div className="contenedor">
        <div className="contenedorinput">
          <label>ET 1</label>
          <input className="Input" className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>ET 2</label>
          <input className="Input"></input>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput-2">
          <div className="contenedorinput">
            <label>FASES</label>
            <input className="Input"></input>
          </div>
          <div className="contenedorinput">
            <label>ARRANQUE</label>
            <input className="Input" placeholder="MM : SS . MILISEG."></input>
          </div>
        </div>
        <div className="contenedorinput-2">
          <div className="contenedorinput">
            <label>ARRANQUE</label>
            <input className="Input" placeholder="MM : SS . MILISEG."></input>
          </div>
          <div className="contenedorinput">
            <label>FASES</label>
            <input className="Input"></input>
          </div>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput-2">
          <div className="contenedorinput">
            <label>ESCALON</label>
            <input className="Input"></input>
          </div>
          <div className="contenedorinput">
            <label>EMISION</label>
            <input className="Input" placeholder="MM : SS . MILISEG."></input>
          </div>
        </div>
        <div className="contenedorinput-2">
          <div className="contenedorinput">
            <label>EMISION</label>
            <input className="Input" placeholder="MM : SS . MILISEG."></input>
          </div>
          <div className="contenedorinput">
            <label>ESCALON</label>
            <input className="Input"></input>
          </div>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput">
          <label>RECEPCION</label>
          <input className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>RECEPCION</label>
          <input className="Input"></input>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput">
          <label>APERTURA</label>
          <input className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>APERTURA</label>
          <input className="Input"></input>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput">
          <label>ARE</label>
          <input className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>ARE</label>
          <input className="Input"></input>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput">
          <label>INT. CERRADO</label>
          <input className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>INT. CERRADO</label>
          <input className="Input"></input>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput-2">
          <div className="contenedorinput">
            <label>FASES</label>
            <input className="Input"></input>
          </div>
          <div className="contenedorinput">
            <label>ARRANQUE</label>
            <input className="Input" placeholder="MM : SS . MILISEG."></input>
          </div>
        </div>
        <div className="contenedorinput-2">
          <div className="contenedorinput">
            <label>ARRANQUE</label>
            <input className="Input" placeholder="MM : SS . MILISEG."></input>
          </div>
          <div className="contenedorinput">
            <label>FASES</label>
            <input className="Input"></input>
          </div>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput-2">
          <div className="contenedorinput">
            <label>ESCALON</label>
            <input className="Input"></input>
          </div>
          <div className="contenedorinput">
            <label>EMISION</label>
            <input className="Input" placeholder="MM : SS . MILISEG."></input>
          </div>
        </div>
        <div className="contenedorinput-2">
          <div className="contenedorinput">
            <label>EMISION</label>
            <input className="Input" placeholder="MM : SS . MILISEG."></input>
          </div>
          <div className="contenedorinput">
            <label>ESCALON</label>
            <input className="Input"></input>
          </div>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput">
          <label>RECEPCION</label>
          <input className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>RECEPCION</label>
          <input className="Input"></input>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput">
          <label>ESTADO INT.</label>
          <input className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>ESTADO INT.</label>
          <input className="Input"></input>
        </div>
      </div>
    </>
  );
}
