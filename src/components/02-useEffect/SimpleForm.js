import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log('hey!');
  }, []);   // el , [] permite que solo se dispare una vez el effect, de lo contrario siempre se dispara con cualquier cambio


  useEffect(() => {
    // console.log('formState cambio');
  }, [formState]);


  useEffect(() => {
    // console.log('email cambio');
  }, [email]);


  const handleInputChange = ({ target }) => {   // Destructuring from event
    setFormState({
      ...formState,
      [target.name]: target.value     // [target.name] computa la propiedad con el valor del target.name
    });
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>


      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      { (name === '123') && <Message />}
    </>
  )
}
