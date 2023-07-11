import React from 'react';
import { projects } from "../data/data"
import { ProjectCards } from './components/project-cards';

const MyProjects = () => {
  return (
    <main className="sm:mb-32 mb-16">
      <section className='flex flex-col w-11/12 content-center m-auto mt-10 mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Mes projets</h2>
        <div className='flex flex-row flex-wrap justify-between gap-5 mt-6' >
          {projects.map((project, index) => {
            return <ProjectCards datas={project} key={index} />
          })}


        </div>
      </section>
    </main>
  )
}

export default MyProjects