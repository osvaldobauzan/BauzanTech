
'use client';
import BuazanRoundedLogo from '/src/assets/Blue-round-Logo.png'
import { Button, Checkbox, Label, Radio, TextInput, Textarea } from 'flowbite-react';
import Nav from '../components/Navbar';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [whatsApp, setWhatsApp] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name && email && company && phone && message && whatsApp){
       
          const serviceId = 'service_qpb0r9p'
          const templateId = 'template_zhkry8s'
          const userId = 'oo8-tuo0DC0b_dZUx'

          const whatsappStatus = whatsApp ? 'Sí tiene WhatsApp' : 'No tiene WhatsApp';

          const templateParams = {
              from_name: name,
              from_email: email,
              from_company: company,
              from_phone: phone,
              to_name: 'Bauzan Tech Solutions',
              message: message,
              whatsApp: whatsappStatus
          }

      emailjs.send(serviceId, templateId, templateParams, userId)
          .then((response) => {
              console.log('Email sent successfully', response);
              setName('');
              setEmail('');
              setMessage('');
              setCompany('');
              setPhone('');
              setWhatsApp('')

              Swal.fire({
                title:  "¡Gracias por ponerte en contacto!",
                text: "¡Te saludaremos en breve!",
                icon: "success",
              });

          })
          .catch((error) => {
              console.log('Error sending email: ', error);
          });
      }else{
          Swal.fire({
            title: "¡Error!",
            text: "Por favor, completa todos los campos obligatorios.",
            icon: "error"
        });
      }
  }
  return (
    <section className='font-Montserrat text-left lg:text-lg'>
      <Nav logo={BuazanRoundedLogo}/>

   
    <section className='flex flex-col font-bold justify-center items-center'>

    <p class="lg:mx-32 mx-12 mt-10 text-gray-500 dark:text-gray-400 xl:mb-10">¿Por que no nos cuentas un poco más de la solución que estás buscando? Podemos darte una consultoría gratuíta y hablar de tu negocio. Dejanos tu información por aquí y nosotros nos contactamos:</p>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-2xl lg:m-2 p-12 lg:p-2 justify-center">
      <div>
        <div className="mb-2 block font-bold">
          <Label htmlFor="username3" value="Your name" className='font-bold'/>
        </div>
        <TextInput 
            type="name" 
            value={name} 
            placeholder="Juan López" 
            required
            onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block font-bold">
          <Label htmlFor="email1" value="Your email" className='font-bold'/>
        </div>
        <TextInput 
            type="email" 
            value={email} 
            placeholder="name@email.com" 
            required
            onChange={(e) => setEmail(e.target.value)}

        />
      </div>
      <div>
        <div className="mb-2 block font-bold">
          <Label htmlFor="phone" value="Your Phone" className='font-bold'/>
        </div>
        <TextInput 
            type="phone" 
            value={phone} 
            required
            onChange={(e) => setPhone(e.target.value)}

        />
      </div>
      <div>
        <div className="mb-2 block font-bold">
          <Label htmlFor="phone" value="Company Name" className='font-bold'/>
        </div>
        <TextInput 
            type="company" 
            value={company} 
            required
            onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block font-bold">
        <Label htmlFor="comment" value="Your message" className='font-bold' required/>
      </div>
      <Textarea 
        placeholder="Leave a comment..." 
        value={message} 
        required 
        rows={4}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
    <div>
        <div className="mb-2 block">
        <Label htmlFor="comment" value="¿Tienes WhatsApp?"/>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox name="yes" checked={whatsApp} onChange={(e) => setWhatsApp(e.target.checked)}  />
        <Label htmlFor="Yes">Si</Label>
      </div>
    </div>
      <div className="flex items-center gap-2">
        <Checkbox  required/>
        <Label htmlFor="terms">Aceptar Terminos de Privacidad</Label>
      </div>
      <Button className='bg-blue-bauzan' type="submit">Submit</Button>
    </form>
    </section>
    </section>
  );
}

export default Contact;
