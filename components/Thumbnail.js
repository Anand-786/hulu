import Image from 'next/legacy/image';
import React from 'react';
import {ThumbUpIcon} from '@heroicons/react/solid';
import { forwardRef } from 'react';

const Thumbnail = forwardRef(({result}, ref) => {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div ref={ref} className='group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
        <Image alt='' layout='responsive' height={1080} width={1920} 
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`} />
        
        <div className='p-2'>
            <p className='max-w-md font-semibold line-clamp-2'>{result.overview}</p>
            <h2 className='mt-1 text-2xl text-white transition-all 
              duration-100 ease-in-out font-semibold tracking-wide'>{result.title || result.original_name}</h2>
            <p className='flex items-center opacity-0 group-hover:opacity-100 font-semibold text-green-500'>
                {result.media_type && `${result.media_type} · `}{" "}
                {result.release_date || result.first_air_date} ·  {" "}
                <ThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
            </p>
        </div>
    </div>
  )
})

export default Thumbnail