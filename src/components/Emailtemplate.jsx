// import * as React from 'react';


// export default EmailTemplate = ({
//   fullname,
//   email,
//   message
// }) => (
//   <div>
//     <h1>Hola, Duban !!</h1>
//     <h2>Una persona llamada {fullname} te quiere contactar, su correo es {email} y te dejo el siguiente mensaje: </h2>
//     <p> {message} </p>    
//     <button>
//         <a href="https://dubanverjel.netlify.app/">Ir al portafolio</a>
//     </button>
//   </div>
// );

import React from 'react'

const Emailtemplate = ({
  fullname,
  email,
  message
}) => {
  return (
    <div>
    <h1>Hola, Duban !!</h1>
    <h2>Una persona llamada {fullname} te quiere contactar, su correo es {email} y te dejo el siguiente mensaje: </h2>
    <p> {message} </p>    
    <button>
        <a href="https://dubanverjel.netlify.app/">Ir al portafolio</a>
    </button>
  </div>
  )
}

export default Emailtemplate

