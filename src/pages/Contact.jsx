
'use client';
import BuazanRoundedLogo from '/src/assets/Blue-round-Logo.png'
import BauzanRoundedRedLogo from '/src/assets/Red-round-Logo.png'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import Nav from '../components/Navbar';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_qpb0r9p'
        const templateId = 'template_zhkry8s'
        const userId = 'oo8-tuo0DC0b_dZUx'

        const templateParams = {
            from_name: name,
            from_email: email,
            from_company: company,
            from_phone: phone,
            to_name: 'Bauzan Tech Solutions',
            message: message
        }

    emailjs.send(serviceId, templateId, templateParams, userId)
        .then((response) => {
            console.log('Email sent successfully', response);
            setName('');
            setEmail('');
            setMessage('');
            setCompany('');
            setPhone('');
        })
        .catch((error) => {
            console.log('Error sending email: ', error);
        });
    }

  return (
    <section className='font-Montserrat text-left lg:text-lg flex flex-col justify-center items-center'>
    <Nav logo={BuazanRoundedLogo}/>

    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-2xl m-12 font-bold">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username3" value="Your name" />
        </div>
        <TextInput 
            type="name" 
            value={name} 
            placeholder="Bonnie Green" 
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
        <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" required/>
      </div>
      <Textarea 
        placeholder="Leave a comment..." 
        value={message} 
        required 
        rows={4}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
      <div className="flex items-center gap-2">
        <Checkbox  required/>
        <Label htmlFor="terms">Aceptar Terminos de Privacidad</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
    </section>
  );
}

export default Contact;
