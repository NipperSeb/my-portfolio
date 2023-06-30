import React from 'react'
import { aboutMeData } from './data/data'
import Image from "next/image";

const AboutMePage = () => {
  return (
    <main className="flex flex-col items-center">
      <section className="flex sm:flex-row sm:w-10/12 sm:mt-10 mb-6 items-center flex-col ">
        <div className="sm:w-1/3 max-w-xs">
          <Image className='profilImage' width={640} height={960} aria-label={"image de Sébastien Pincepoche"} alt={"image de Sébastien Pincepoche"} src={"/img/avatar.jpg"} priority={false} />
        </div>
        <div className='sm:ml-20 sm:w-2/3 w-full mt-6 sm:mt-0'>
          <h2>{aboutMeData.title}</h2>
          <p className="text-base">{aboutMeData.body}</p>
        </div>
      </section>
      <section className='w-full my-8 bg-blue-light p-10 h-full'>
        <div><p>{aboutMeData.highLightedBody}</p></div>
      </section>
      <section className='flex flex-col-reverse sm:flex-row sm:w-10/12 mt-10 items-center'>
        <div className='sm:w-7/12'><p>{aboutMeData.body2}</p></div>

        <div className='sm:w-5/12 sm:ml-10'>
          <Image className='h-250 object-cover w-500' width={500} height={250} aria-label={"image de Sébastien Pincepoche"} alt={"image de Sébastien Pincepoche"} src={"/img/ordinateur-portable-ecran-seo.jpg"} priority={false} />
        </div>

      </section>
    </main>
  )
}

export default AboutMePage