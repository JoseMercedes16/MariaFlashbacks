import React from 'react'
import {  useState } from 'react'
import emailjs from '@emailjs/browser';

function ContactMe() {
   
const [datos, setdatos] = useState({
    nombre :'',
    apellido : '',
    email : '',
    comment : '',
})

const setChange = (event) =>{
   // console.log(event.target.value)
    setdatos({
        ...datos,
        [event.target.name]: event.target.value
    })

}

const enviarDatos = (event) =>{
    event.preventDefault();
    //console.log(datos.nombre + " " + datos.apellido + ' ' + datos.email + ' ' + datos.comment)

  

    emailjs.send('service_vt0b6t8','template_dwdmmst',datos
    , 'user_AovlKfyG1zNBLlHzfPYcl')
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text);
	}, (err) => {
	   console.log('FAILED...', err);
	});


}

return (
    <div style={{
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: '15px',

    }}>
        <h1>ContactMe</h1>
        <p>Dime como puedo ayudarte por una de estas vias</p>

        <div style={{
            maxWidth: '1000px',
            margin: 'auto'
        }}>
            <form onSubmit={enviarDatos} >

                <div class="form-floating mb-3">
                    <input type="text"
                        class="form-control"
                        placeholder="First Name"
                        name="nombre"
                        onChange={setChange}
                        required />
                    <label for="floatingInput">First Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text"
                        class="form-control"
                        placeholder="Last Name"
                        name="apellido"
                        onChange={setChange}
                        required />
                    <label for="floatingInput">Last Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email"
                        class="form-control"
                        placeholder="name@example.com"
                        name="email"
                        onChange={setChange}
                        required />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating" >
                    <textarea class="form-control"
                        placeholder="Leave a comment here"
                        name="comment"
                        onChange={setChange}
                         required
                        style={{ height: '200px' }}></textarea>
                    <label for="floatingTextarea">Leave a comment here</label>
                </div>
                <input style={{ marginTop: '20px' }}
                    type="submit" class="btn btn-success"
                    id="button"
                    value="Send Email"
                     />
            </form>
        </div>



    </div>
)}

export default ContactMe 