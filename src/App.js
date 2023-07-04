import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const initialValues = {
    et1: '',
    et2: '',
  };
  const initialValuesInput = {
    arranque1: '',
    arranque2: '',
    emision1: '',
    emision2: '',
    recepcion1: '',
    recepcion2: '',
    apertura1: '',
    apertura2: '',
    are1: '',
    are2: '',
    cierreint1: '',
    cierreint2: '',
    arramque12: '',
    arramque22: '',
    emision21: '',
    emision22: '',
    recepcion21: '',
    recepcion22: '',
    estado21: '',
    estado22: '',
    arranque1men: '',
    arranque2men: '',
    emision1men: '',
    emision2men: '',
    recepcion1men: '',
    recepcion2men: '',
    apertura1men: '',
    apertura2men: '',
    are1men: '',
    are2men: '',
    cierreint1men: '',
    cierreint2men: '',
    arramque12men: '',
    arramque22men: '',
    emision21men: '',
    emision22men: '',
    recepcion21men: '',
    recepcion22men: '',
    estado21men: '',
    estado22men: '',
  };

  const [values, setValues] = useState(initialValues);

  const [inputValues, setInputValues] = useState(initialValuesInput);

  const [valuesTime, setValuesTime] = useState(initialValuesInput);

  const formatTime = (inputValue) => {
    // Aplicar el formato "minutos:segundos:milisegundos"
    let formattedTime = inputValue.replace(/\D/g, ''); // Eliminar caracteres no numéricos
    if (formattedTime.length > 7) {
      formattedTime = formattedTime.slice(0, 7); // Limitar a 7 caracteres
    }
    formattedTime = formattedTime.replace(/(\d{2})(\d{2})(\d{3})/, '$1:$2.$3'); // Insertar los separadores
    return formattedTime;
  };
  const transformValue = (inputValue) => {
    // Aplicar el formato "minutos:segundos:milisegundos"
    let formattedTime = inputValue.replace(/\D/g, ''); // Eliminar caracteres no numéricos
    if (formattedTime.length > 7) {
      formatTime = formattedTime.slice(0, 7); // Limitar a 7 caracteres
    }
    const tiempo = new Date();

    const min = formattedTime.replace(/(\d{2})(\d{2})(\d{3})/, '$1');
    const seg = formattedTime.replace(/(\d{2})(\d{2})(\d{3})/, '$2');
    const miliseg = formattedTime.replace(/(\d{2})(\d{2})(\d{3})/, '$3');

    tiempo.setMinutes(Number(min));
    tiempo.setSeconds(Number(seg));
    tiempo.setMilliseconds(Number(miliseg));
    return tiempo;
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setValues(input);
  };
  const handleChangeTime = (e) => {
    const inputValue = e.target.value;
    const formattedTime = formatTime(inputValue);
    setInputValues({ ...inputValues, [e.target.name]: formattedTime });
  };
  const onBlurChangeTime = (e) => {
    const inputValue = e.target.value;
    const valuetransform = transformValue(inputValue);
    setValuesTime({ ...valuesTime, [e.target.name]: valuetransform });
  };

  /* useEffect(()=>{
    setValues(values)
  }) */

  console.log(valuesTime);
  console.log(inputValues);
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
              ARRANQUE {values?.et1 !== '' && (values?.et1).toUpperCase()}
            </label>
            <input
              className="Input"
              type="text"
              name="arranque1"
              id="arranque1"
              value={inputValues.arranque1}
              onChange={handleChangeTime}
              onBlur={onBlurChangeTime}
              className="Input"
              placeholder="MM : SS : MILISEG."
            ></input>
          </div>
        </div>
        <div className="contenedorinput-2">
          <div className="contenedorinput">
            <label>
              ARRANQUE {values?.et2 !== '' && (values?.et2).toUpperCase()}{' '}
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
              EMISION {values?.et1 !== '' && (values?.et1).toUpperCase()}
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
              EMISION {values?.et2 !== '' && (values?.et2).toUpperCase()}
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
            RECEPCION {values?.et1 !== '' && (values?.et1).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>
            RECEPCION {values?.et2 !== '' && (values?.et2).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput">
          <label>
            APERTURA {values?.et1 !== '' && (values?.et1).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>
            APERTURA {values?.et2 !== '' && (values?.et2).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput">
          <label>
            ARE ALARMA {values?.et1 !== '' && (values?.et1).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>
            ARE ALARMA {values?.et2 !== '' && (values?.et2).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput">
          <label>
            CIERRE INT. {values?.et1 !== '' && (values?.et1).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>
            CIERRE INT. {values?.et2 !== '' && (values?.et2).toUpperCase()}
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
              ARRANQUE {values?.et1 !== '' && (values?.et1).toUpperCase()}
            </label>
            <input className="Input" placeholder="MM : SS : MILISEG."></input>
          </div>
        </div>
        <div className="contenedorinput-2">
          <div className="contenedorinput">
            <label>
              ARRANQUE {values?.et2 !== '' && (values?.et2).toUpperCase()}
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
              ESCALON {values?.et2 !== '' && (values?.et2).toUpperCase()}
            </label>
            <input className="Input"></input>
          </div>
          <div className="contenedorinput">
            <label>
              EMISION {values?.et1 !== '' && (values?.et1).toUpperCase()}
            </label>
            <input className="Input" placeholder="MM : SS : MILISEG."></input>
          </div>
        </div>
        <div className="contenedorinput-2">
          <div className="contenedorinput">
            <label>
              EMISION {values?.et2 !== '' && (values?.et2).toUpperCase()}
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
            RECEPCION {values?.et1 !== '' && (values?.et1).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>
            RECEPCION {values?.et2 !== '' && (values?.et2).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
      </div>
      <div className="contenedor">
        <div className="contenedorinput">
          <label>
            ESTADO INT. {values?.et1 !== '' && (values?.et1).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
        <div className="contenedorinput">
          <label>
            ESTADO INT. {values?.et2 !== '' && (values?.et2).toUpperCase()}
          </label>
          <input className="Input"></input>
        </div>
      </div>
    </>
  );
}
