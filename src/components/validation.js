//import React, { useState } from "react";  // ! EN DUDA 
//import Form from "./Form";                // ! EN DUDA



export const validation = (userData, errors, setErrors) => {
    const newErrors = {...errors}

    if (!userData.email) {
      newErrors.email = "Se requiere email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) { 
        newErrors.email = "Formato invalido";
    } else if (userData.email.length > 35) { 
        newErrors.email = "Email nombre de usurio no puede tener mas de 35";
    } else {
        newErrors.email = "";
    }
    
    if (!userData.password) {
      newErrors.password = "Ingrese contraseña"
    } else if (!/\d/.test(userData.password)) {
        newErrors.password = "la contraseña tiene que tener al menos un número"
    } else if (userData.password.length < 5 || userData.password.length > 11 ) {
        newErrors.password = "La contraseña tiene que tener una longitud entre 6 y 10 caracteres"
    } else { 
        newErrors.password = ""
    }

    setErrors(newErrors)
  };

//   //! guarda solo uno de los valores creo con retraso
// export const validation = (userData, errors, setErrors) => {

//     if (!userData.email) {
//       setErrors({...errors, email: "Se requiere email"});
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) { 
//       setErrors({...errors, email: "Formato invalido"});
//     } else if (userData.email.length > 35) { 
//       setErrors({...errors, email: "Email nombre de usurio no puede tener mas de 35"});
//     } else {
//       setErrors({...errors, email: ""})
//     }
    
//     if (!userData.password) {
//       setErrors({...errors, password: "Ingrese contraseña"})
//     } else if (!/\d/.test(userData.password)) {
//       setErrors({...errors, password: "la contraseña tiene que tener al menos un número"})
//     } else if (userData.password.length < 5 || userData.password.length > 11 ) {
//       setErrors({...errors, password: "La contraseña tiene que tener una longitud entre 6 y 10 caracteres"})
//     } 
//     else { 
//       setErrors({...errors, password:""})
//     }
//   };
    
