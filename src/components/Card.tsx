type prop = {
    title:string,
    text:string
}
export default function Card({title,text}:prop) {
  return (
    <div className='p-2 py-6 text-white bg-[#d5717c] rounded-xl text-center  '>
        <h1 className='font-bold text-4xl'>{title}</h1>
        <p className=' px-3  mt-4 text-3xl '>
            {text}
        </p>

    </div>
  )
}
