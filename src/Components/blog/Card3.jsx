import React from 'react'
import { Link } from 'react-router-dom'
function Card3({ people }) {
    return (
        <div>
            <Link><img src={people.image} alt="" className='w-full h-[400px] object-cover rounded-xl'/></Link>
            <div className='flex gap-2 items-center py-2'>
                <span className='font-[400] text-[#171717] text-[12px] font-inter'>{people.fullname}</span>
                <span className='bg-[#030612] w-[1px] h-[10px]'></span>
                <span className='font-[400] text-[#171717] text-[12px] font-inter'>{ people.date}</span>
            </div>
            <Link className='text-[18px] font-[600] text-[#333333] font-inter leading-[22px] hover:text-[#0075FA] ease-in duration-300 pt-[10px]'>{people.title}</Link>
            <p className='text-[13px] font-[400] text-[#171717] font-poppins pt-[6px]'>{people.discription}</p>
        </div>
    )
}

export default Card3