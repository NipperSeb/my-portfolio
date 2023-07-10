import Image from 'next/image'
import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';



type ProjectCardsProps = {
  datas: {
    title: string;
    body1: string;
    body2: string;
    image: string;
    links: {
      url: string;
      text: string;
    }[];
  };
};

export const ProjectCards = ({ datas }: ProjectCardsProps) => {
  const { title, body1, body2, image, links } = datas;
  return (
    <div className='rounded-lg  w-full  md:w-1/2-g lg:w-1/3-g   shadow-lg bg-grey-light'>
      <Image
        aria-label={`Image de ${title}`}
        priority={false}
        width={500}
        height={250}
        src={`/imagesProjects/${image}`}
        alt={title}
        className='object-cover w-full h-48'
      />
      <div className='p-4'>
        <h3 className='text-lg font-medium'>{title}</h3>
        <p className='text-sm mt-2 min-h-50'>{body1}</p>
        <p className='text-sm mt-2 min-h-50'>{body2}</p>
        <div className='flex flex-row mt-4 justify-between'>
          <a href={links[0].url} className='flex items-center'>
            <FaGithub size={32} />
            <span className='text-black ml-0.5'>{links[0].text}</span>
          </a>
          <a href={links[1].url} className='flex items-center'>
            <AiOutlineFundProjectionScreen size={32} />
            <span className='text-black ml-0.5'>{links[1].text}</span>
          </a>
        </div>

      </div>
    </div>
  )
}

