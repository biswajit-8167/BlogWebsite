import React from 'react'
import {Link} from 'react-router-dom'
function Card1({fullname,date,image,title,discription,profile1}) {
  return (
    <div>
       <Link> <img src={image} alt=''/></Link>
         <div className='flex items-center gap-2 pt-[15px] pb-[10px]'>
            <img src={ profile1} alt='' className='w-[25px] h-[25px] rounded-full'/>
            <h1 className='text-[16px] font-[500] text-[#030612] font-inter'>{fullname}</h1>
             <span className='bg-[#030612] w-[1px] h-[13px]'></span>
            <p className='text-[16px] font-[500] text-[#030612] font-inter'>{date}</p>
         </div>
         <Link className='text-[25px] font-[600] text-[#171717] font-inter hover:text-[#0075FA] ease-in duration-300'>{title}</Link>
         <p className='text-[15px] font-[400] text-[#171717] font-poppins leading-[25px]'>{discription}</p>
    </div>
  )
}

export default Card1