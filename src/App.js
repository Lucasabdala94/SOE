import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const initialValues = {
    et1: null,
    et2: null,
  };
  const initialTimers = {
    arranque1: null,
    arranque2: null,
    emision1: null,
    emision2: null,
    recepcion1: null,
    recepcion2: null,
    apertura1: null,
    apertura2: null,
    are1: null,
    are2: null,
    cierreint1: null,
    cierreint2: null,
    arramque12: null,
    arramque22: null,
    emision21: null,
    emision22: null,
    recepcion21: null,
    recepcion22: null,
    estado21: null,
    estado22: null,
    arranque1men: null,
    arranque2men: null,
    emision1men: null,
    emision2men: null,
    recepcion1men: null,
    recepcion2men: null,
    apertura1men: null,
    apertura2men: null,
    are1men: null,
    are2men: null,
    cierreint1men: null,
    cierreint2men: null,
    arramque12men: null,
    arramque22men: null,
    emision21men: null,
    emision22men: null,
    recepcion21men: null,
    recepcion22men: null,
    estado21men: null,
    estado22men: null,
  };

  const [values, setValues] = useState(initialValues);

  const [timers, setTimers] = useState(initialTimers);

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };
  const handleChangeTime = (e) => {
    const inputValue = e.target.value;
    const formattedTime = formatTime(inputValue);
    setTimers({ ...timers, [e.target.name]: formattedTime });
  };
  const formatTime = (inputValue) => {
    // Aplicar el formato "minutos:segundos:milisegundos"
    let formattedTime = inputValue.replace(/\D/g, ''); // Eliminar caracteres no numéricos
    if (formattedTime.length > 7) {
      formattedTime = formattedTime.slice(0, 7); // Limitar a 7 caracteres
    }
    formattedTime = formattedTime.replace(/(\d{2})(\d{2})(\d{3})/, '$1:$2.$3'); // Insertar los separadores
    return formattedTime;
  };

  /* useEffect(()=>{
    setValues(values)
  }) */

  console.log(values.et1);
  return (
    <>
      <div className="contenedor">
        <div className="contenedorinput">
          <label>ET 1</label>
          <input
            type="text"
            name="et1"
            id="et1"
            onChange={handleChange}
            className="Input"
          ></input>
        </div>
        <div className="contenedorinput">
          <label>ET 2</label>
          <input
            type="text"
            name="et2"
            id="et2"
            onChange={handleChange}
            className="Input"
          ></input>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput-2">
          <div className="contenedorinput">
            <label>FASES </label>
            <input className="Input"></input>
          </div>
          <div className="contenedorinput">
            <label>
              ARRANQUE {values?.et1 !== null && (values?.et1).toUpperCase()}
            </label>
            <input
              className="Input"
              type="text"
              name="arranque1"
              id="arranque1"
              value={timers.arranque1}
              onChange={handleChangeTime}
              className="Input"
              placeholder="MM : SS : MILISEG."
            ></input>
          </div>
        </div>
        <div className="contenedorinput-2">
          <div className="contenedorinput">
            <label>
              ARRANQUE {values?.et2 !== null && (values?.et2).toUpperCase()}{' '}
            </label>
            <input
              className="Input"
              type="text"
              name="arranque1"
              id="arranque1"
              onChange={handleChange}
              className="Input"
              placeholder="MM : SS : MILISEG."
            ></input>
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
            <label>
              EMISION {values?.et1 !== null && (values?.et1).toUpperCase()}
            </label>
            <input
              className="Input"
              type="text"
              name="emision1"
              id="emision1"
              onChange={handleChange}
              className="Input"
            ></input>
          </div>
        </div>
        <div className="contenedorinput-2">
          <div className="contenedorinput">
            <label>
              EMISION {values?.et2 !== null && (values?.et2).toUpperCase()}
            </label>
            <input
              className="Input"
              type="text"
              name="emision2"
              id="emision2"
              onChange={handleChange}
              className="Input"
            ></input>
          </div>
          <div className="contenedorinput">
            <label>ESCALON</label>
            <input className="Input"></input>
          </div>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput">
          <label>
            RECEPCION {values?.et1 !== null && (values?.et1).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>
            RECEPCION {values?.et2 !== null && (values?.et2).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput">
          <label>
            APERTURA {values?.et1 !== null && (values?.et1).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>
            APERTURA {values?.et2 !== null && (values?.et2).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput">
          <label>
            ARE ALARMA {values?.et1 !== null && (values?.et1).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>
            ARE ALARMA {values?.et2 !== null && (values?.et2).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput">
          <label>
            CIERRE INT. {values?.et1 !== null && (values?.et1).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>
            CIERRE INT. {values?.et2 !== null && (values?.et2).toUpperCase()}
          </label>
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
            <label>
              ARRANQUE {values?.et1 !== null && (values?.et1).toUpperCase()}
            </label>
            <input className="Input" placeholder="MM : SS : MILISEG."></input>
          </div>
        </div>
        <div className="contenedorinput-2">
          <div className="contenedorinput">
            <label>
              ARRANQUE {values?.et2 !== null && (values?.et2).toUpperCase()}
            </label>
            <input className="Input" placeholder="MM : SS : MILISEG."></input>
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
            <label>
              ESCALON {values?.et2 !== null && (values?.et2).toUpperCase()}
            </label>
            <input className="Input"></input>
          </div>
          <div className="contenedorinput">
            <label>
              EMISION {values?.et1 !== null && (values?.et1).toUpperCase()}
            </label>
            <input className="Input" placeholder="MM : SS : MILISEG."></input>
          </div>
        </div>
        <div className="contenedorinput-2">
          <div className="contenedorinput">
            <label>
              EMISION {values?.et2 !== null && (values?.et2).toUpperCase()}
            </label>
            <input className="Input" placeholder="MM : SS : MILISEG."></input>
          </div>
          <div className="contenedorinput">
            <label>ESCALON</label>
            <input className="Input"></input>
          </div>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput">
          <label>
            RECEPCION {values?.et1 !== null && (values?.et1).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>
            RECEPCION {values?.et2 !== null && (values?.et2).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput">
          <label>
            ESTADO INT. {values?.et1 !== null && (values?.et1).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>
            ESTADO INT. {values?.et2 !== null && (values?.et2).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
      </div>
    </>
  );
}
