import React from 'react'
import { contactMeText } from "../data/data"
import { Form } from "./components/form"

const ContactPage = () => {
  return (
    <main>
      <div className="flex flex-col w-11/12 content-center m-auto mt-10">
        <h2>ME CONTACTER</h2>
        <div className="flex flex-col md:flex-row w-10/12 content-center m-auto bg-grey-light p-10 gap-20">
          <div className='flex flex-col md:w-2/4'>
            <h3 className="text-2xl mb-10">{contactMeText.title}</h3>
            <p>{contactMeText.body}</p>
          </div>
          <div className="md:w-2/4"><Form /></div>
        </div>
      </div>
    </main>
  )
}

export default ContactPage