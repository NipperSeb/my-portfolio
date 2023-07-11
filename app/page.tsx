import React from 'react'

import Image from "next/image";

const AboutMePage = () => {
  return (
    <main className="flex flex-col items-center">
      <section className="flex sm:flex-row w-10/12 sm:mt-10 mb-6 items-center flex-col">
        <div className=' w-full mt-6 sm:mt-0 '>
          <h2>" De la passion à l'expertise : <br /> À la recherche d'une entreprise pour concrétiser ma reconversion en alternance"</h2>
          <p className="text-base" ><Image className='profilImage' width={640} height={960} aria-label={"image de Sébastien Pincepoche"} alt={"image de Sébastien Pincepoche"} src={"/img/profilSebastien.png"} priority={false} />Ma transition vers le domaine du référencement SEO repose sur ma volonté de conjuguer ma passion pour le marketing digital avec ma maîtrise des techniques de vente et de gestion acquises en tant que chef de rayon. Ayant constaté l'importance croissante de la visibilité en ligne pour les entreprises, je suis convaincu que le référencement SEO est un levier stratégique pour accroître la visibilité et la notoriété d'une marque sur les moteurs de recherche.</p>
        </div>
      </section>
      <section className='w-full my-8 bg-blue-lightness p-10 h-full'>
        <div><h2>Mon parcours</h2><p>Je suis en reconversion suite à une coxarthrose et je bénéficie d’une reconnaissance RQTH qui m’ouvre droit au contrat d’apprentissage. Titulaire d'un Titre MUM &#40;Manager d'Univers Marchand&#41; par VAE et d'un DUT GEA en gestion et management, je me suis ensuite formé dans le digital et le numérique. Actuellement, je termine une formation de développeur web et c'est en réalisant un des projets que j'ai découvert l'importance du SEO.</p></div>
      </section>
      <section className='flex flex-col-reverse sm:flex-row w-10/12 mt-10 items-center'>
        <div className=''><h2>Le SEO</h2><p>Ce qui me plaît avant tout dans le SEO, c'est la possibilité de mettre en place des stratégies efficaces pour améliorer la position d'un site web dans les résultats de recherche, attirer davantage de trafic qualifié et augmenter les chances de conversion. Je souhaite apprendre à maîtriser les techniques telles que l'optimisation des balises méta, l'utilisation pertinente des mots-clés, la création de contenu de qualité et l'amélioration de l'expérience utilisateur.</p></div>
        <div className=' sm:ml-10'>
          <Image className='h-250 object-cover w-500' width={500} height={250} aria-label={"image de Sébastien Pincepoche"} alt={"image de Sébastien Pincepoche"} src={"/img/ordinateur-portable-ecran-seo.jpg"} priority={false} />
        </div>

      </section>
    </main>
  )
}

export default AboutMePage