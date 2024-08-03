import { Resend } from 'resend';
import { prueba } from '../api/send/route';
import { useRef } from 'react';
import { toast } from 'sonner';


const resend = new Resend('re_RKR2H6DY_oyPM1hWvcZB2RNHQGQZLVBft');


const Formulario = () => {
    const formRef = useRef(null);

    const createProduct = async (formData) => {
      const fullname = formData.get("fullname");
      const email = formData.get("email");
      const message = formData.get("message");
    
      if (!fullname || !email || !message) return;
    
        try {   
          // console.log('datos', fullname, email, message)
          const response = await prueba(formData)
          // console.log('response::::::', response)    
          if (response.status === 200) {
            formRef.current.reset();
            // alert("Información enviada correctamente !!!")
            toast.success("Información enviada !!!")
          } else {
            console.error('Error al enviar el formulario:', response.message);
            toast.success(response.message)
          }
        } catch (error) {
            console.log('error', error)            
        }      
    }

    return (
            <form className="form"    
                ref={formRef}        
                action={createProduct}            
            >
            <div className="input-wrapper">
                <input type="text" name="fullname" className="form-input" placeholder="Nombre completo" 
                required data-form-input />

                <input type="email" name="email" className="form-input" placeholder="Correo electronico"
                required data-form-input />
            </div>

            <textarea name="message" className="form-input" placeholder="Escriba su mensaje"       
            required data-form-input></textarea>

            <button className="form-btn" >
                <ion-icon name="paper-plane"></ion-icon>
                <span>Enviar mensaje</span>
            </button>

        </form>
    )

};

export default Formulario


// -------------------------------------------------------------------------------------------------------------------------------------------

// import { useRef } from 'react';
// import { createProduct } from '../api/send/route';

// const Formulario = () => {
//   const formRef = useRef(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData(formRef.current);
//     const response = await createProduct(formData);

//     console.log('response form:::: ', response)

//     if (response && response.status === 200) {
//       formRef.current.reset();
//     } else {
//       // Manejar error si es necesario
//       console.error('Error al enviar el formulario');
//     }
//   };

//   return (
//     <form ref={formRef} className="form" onSubmit={handleSubmit}>
//       <div className="input-wrapper">
//         <input type="text" name="fullname" className="form-input" placeholder="Nombre completo" required />
//         <input type="email" name="email" className="form-input" placeholder="Correo electronico" required />
//       </div>
//       <textarea name="message" className="form-input" placeholder="Escriba su mensaje" required></textarea>
//       <button type="submit" className="form-btn">
//         <ion-icon name="paper-plane"></ion-icon>
//         <span>Enviar mensaje</span>
//       </button>
//     </form>
//   );
// };

// export default Formulario;
