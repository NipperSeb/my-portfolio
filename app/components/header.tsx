'use client'
import Image from "next/image";
import React from 'react';
import { useState } from 'react';
import Link from "next/link";
import { useMedia } from 'react-use';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

type HeaderProps = {

  pages: {
    id: number;
    label: string;
    link: string;
  }[]
}

export const Header = ({ pages }: HeaderProps) => {

  const displayMenu = () => {
    return pages.map((page) =>
    (
      <Link aria-label={page.label} key={page.id} href={page.link} className="text-white px-6 py-2 min-w-100 hover:bg-blue-light hover:text-blue font-display uppercase tracking-wide">
        {page.label}
      </Link>
    )
    )
  }

  const isDesktop = useMedia('(min-width: 640px)', true);
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen(!open);

  return (
    <header className="flex flex-col relative bg-linear-557AFF w-full h-48">
      <div className="flex flex-col justify-around h-full px-6 bg-header z-10">
        <nav className="text-right flex flex-row gap-6 self-end">
          {isDesktop ? (displayMenu()) : (
            <>
              <button className="text-white "
                onClick={() => toggleSidebar()}>
                <FaBars size={32} />
              </button>
              <div
                className={
                  open
                    ? 'absolute top-0 right-0 z-50 h-192 w-3/5 bg-white shadow-md'
                    : 'hidden'
                }
              >
                <div className='flex flex-col text-center bg-blue'>
                  <button
                    className='mb-6 mt-6 mr-1 flex justify-end px-5 text-xl'
                    onClick={() => toggleSidebar()}
                  >
                    <GrClose />
                  </button>
                  {displayMenu()}
                </div>
              </div>
            </>)}
        </nav>
        <h1 className="text-white uppercase">Sébastien Pincepoche</h1>
      </div>

      <Image priority height={400} width={2000} className='w-full h-48 object-cover object-bottom absolute ' src='/img/allume-ordinateur-portable-gris.webp' alt='ordinateur-portable-dans-espace-coworking' aria-label="ordinateur-portable-dans-espace-coworking" />
    </header>
  )
}
