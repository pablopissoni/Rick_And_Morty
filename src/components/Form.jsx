import React, { useState } from "react";
import { validation } from "./validation";
import "../styles/form.css";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    //* HOOK Acumulador de datos
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    //* HOOK Acumulador de errores
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    // const { name, value } = event.target; //* Se hace un destructurin del objeto "event.target" (que a su vez viene del objeto event) para obtener las propiedades "name" y "value"
    const name = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [name]: value });
    validation({ ...userData, [name]: value }, errors, setErrors); //! Se hace un destructuring "{...userData, [name]: value}" de "userData" para asegurarse que utilice los valores recientes de userData para la validacion
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  //! Al Hacer SUBMIT la funcion Validate funciona con retraso

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          value={userData.email}
          placeholder="rick_infinito@mail.com"
          onChange={handleChange}
        />
        
        <span>{errors.email}</span> {/* MUESTRO EL ERROR DEL EMAIL*/}
        
        <label htmlFor="password">Password</label>
        <input
          id="password" //? el ID del INPUT que asocio al HTMLFOR del label para que al hacer click en label me direccione al input
          type="password" //? El tipo de texto que es el input
          name="password" //? El valor de "name" en este caso "password" es el KEY y el VALUE es el input que se envia al servidor
          value={userData.password} //? Es el valor del input en el campo, que en este caso es el valor del hook actualizado por "handleChange"
          placeholder="Jerry_apesta123" //? Es el texto que aparece en gris a modo de ejemplo dentro del input
          onChange={handleChange} //? Esta atento a cada cambio y ejecuta en este caso handleChange
        />
        
        <span>{errors.password}</span> {/* MUESTRO EL ERROR DEL PASSWORD*/}
        
        <button className="btLogin" type="submit">Log in</button>
      </form>
    </div>
  );
}
