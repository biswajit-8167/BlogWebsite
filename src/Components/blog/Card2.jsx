import React from 'react'
import {Link} from 'react-router-dom'
function Card2({ user }) {
    return (
        <div className='flex gap-4'>
            <div>
                <Link><img src={user.image1} alt="" /></Link>
            </div>
            <div className='flex flex-col justify-center '>
                <div className='flex gap-2 items-center'>
                    <span className='font-[400] text-[#171717] text-[12px] font-inter'>{user.fullname}</span>
                    <span className='bg-[#030612] w-[1px] h-[10px]'></span>
                    <span className='font-[400] text-[#171717] text-[12px] font-inter'>{user.date}</span>
                </div>
                <Link className='text-[18px] font-[600] text-[#333333] font-inter leading-[22px] hover:text-[#0075FA] ease-in duration-300'>{user.title}</Link>
                <p className='text-[13px] font-[400] text-[#171717] font-poppins pt-[6px]'>{user.discription}</p>
            </div>
            
        </div>

    )
}

export default Card2