import Image from "next/image";
import React from 'react'
import Link from "next/link";

type HeaderProps={
  name: string,
  pages:{
    id: number;
    label:string;
    link:string;
  }[]
}

export const Header = ({name, pages}:HeaderProps) => {
  return (
   <header className="flex flex-col relative bg-linear-557AFF w-full h-48">
    <div className="flex flex-col justify-around h-full px-6 bg-header z-10">
      <nav className="text-right flex flex-row gap-6 self-end">
        {pages.map(page => {
          return (
          <Link aria-label={page.label} key={page.id} href={page.link} className="text-white px-6 py-2 min-w-100 hover:bg-blue-light hover:text-blue font-display uppercase tracking-wide">
            {page.label}
          </Link>
          )
        })}
      </nav>
      <h1 className="text-white uppercase pt-20">{name}</h1>
    </div>
    
    <Image priority height={400} width={2000} className='w-full h-48 object-cover object-top absolute ' src='/img/ordinateur-portable-dans-espace-coworking.webp' alt='ordinateur-portable-dans-espace-coworking' aria-label="ordinateur-portable-dans-espace-coworking"/>
   </header>
  )
}
