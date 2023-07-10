'use client'
import React, { useState, useRef, useEffect } from 'react';


export const Form = () => {
  const [isMessageSent, setMessageSent] = useState<boolean>(false)
  const formRef = useRef<HTMLFormElement | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.currentTarget;
    const name = target.elements.namedItem('name') as HTMLInputElement;
    const company = target.elements.namedItem('company') as HTMLInputElement;
    const email = target.elements.namedItem('email') as HTMLInputElement;
    const message = target.elements.namedItem('message') as HTMLInputElement;

    const data = {
      name: name.value,
      company: company.value,
      email: email.value,
      message: message.value

    };
    try {

      const response = await fetch('/api/contact', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },

      });
      if (!response.ok) {
        throw new Error(" HTTP error! status: " + response.status);

      }
      setMessageSent(true)
    }
    catch (error: any) {
      console.log("problem" + error.message)
    }
    console.log(data)
  }

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isMessageSent && formRef) {
      formRef.current?.reset();
      setTimeout(() => {
        setMessageSent(false)
      }, 2000)
    }
    return () => {
      clearTimeout(timeout)
    };
  }, [isMessageSent])
  return (
    <>
      <form className='bg-white p-10' onSubmit={handleSubmit} ref={formRef}>
        <div className='mb-4'>
          <label htmlFor="name" className='label-form'>Nom</label>
          <input id='name' type="text" name='name' className='input-form' required minLength={3} maxLength={200} />
        </div>
        <div className='mb-4'>
          <label htmlFor="company" className='label-form'>Entreprise</label>
          <input id='company' type="text" name='company' className='input-form' minLength={2} maxLength={200} />
        </div>
        <div className='mb-4'>
          <label htmlFor="email" className='label-form'>Email</label>
          <input id='email' type="email" name='email' className='input-form' required />
        </div>
        <div className='mb-4'>
          <label htmlFor="message" className='label-form'>Message</label>
          <textarea name="message" id="message" className='input-form' required minLength={10} maxLength={1000} />
        </div>
        <button type='submit' className="bg-blue rounded-lg text-white hover:text-blue hover:bg-white min-w100 px-5 h-8 border border-slate-300 hover:border-indigo-300hover:border-1">Envoyer message</button>
      </form>
      {isMessageSent && <p>message envoyé</p>}
    </>
  )
}

