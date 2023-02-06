import React from 'react'
import { motion } from "framer-motion"
import { PlusCircleIcon, HeartIcon } from '@heroicons/react/24/outline'


const ProductItem = ({ src, desc, id }) => {
  return (
    <div className='mx-10 shadow-2xl text-center p-2 rounded-md'>
      <img src={src} alt="" className='w-[32rem]' />
      <h1 className='mt-2 text-xl'>{desc}</h1>
      <h1 className='mt-2 text-sm border border-black w-28 h-6 text-black font-bold hover:bg-black hover:text-white cursor-pointer rounded-full mx-auto'>Show More</h1>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 hover:fill-red-500 cursor-pointer float-left">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 float-right cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

    </div>
  )
}

export default ProductItem
