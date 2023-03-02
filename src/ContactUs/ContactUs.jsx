import React,{useRef} from 'react'
// import 'contactUs.css'
import emailJs from '@emailjs/browser'

export const ContactUs = () => {

    const refForm = useRef()
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        // console.log(refForm);

        const serviceId = "service_s59dljh"
        const templateId = "template_njnmck7"
        const apikey = "0Mn6eGuKMGdmcKpUs"

        emailJs.sendForm(serviceId, templateId, refForm.current, apikey)
        .then( result => console.log(result.text))
        .catch( error => console.log(error)) 
    }
  return (
    <form ref={refForm} onSubmit={handleSubmit}>
        <div>
            <h2>Contact US</h2>
            <p>please fill this form</p>
        </div>
        <fieldset> 
            <label htmlFor="">name</label>
            <input name='username' type="text" placeholder='ej: Tito dev' required/>
        </fieldset>
        <fieldset> 
            <label htmlFor="">Email</label>
            <input name='email' type="email" placeholder='ej: jorge591@gmail.com' required/>
        </fieldset>
        <fieldset> 
            <label htmlFor="">message</label>
            <textarea name='message' maxLength="500" type="email" placeholder='type your message' required/>
        </fieldset>
        <button >send</button>
    </form>
  )
}
