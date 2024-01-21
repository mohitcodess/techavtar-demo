import React from 'react'
type prop = {
    title:string,
    text:string
}
export default function Card({title,text}:prop) {
  return (
    <div className='p-4 text-white bg-[#d5717c] rounded-xl text-center  '>
        <h1 className='font-bold text-4xl'>{title}</h1>
        <p className='p-2 text-lg mt-4 text-3xl'>
            {text}
        </p>

    </div>
  )
}
