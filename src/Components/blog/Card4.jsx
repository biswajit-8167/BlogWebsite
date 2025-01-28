import React from 'react'
import { Link } from 'react-router-dom'
function Card4({ cateUser }) {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center'>
               <Link> <img src={cateUser.image} alt="" className='w-[130px] h-[130px] object-cover rounded-xl' /></Link>
               <Link> <h1 className='text-[17px] font-[600] text-[#333333] font-inter  pt-[10px] text-center hover:text-[#0075FA] ease-in duration-300'>{cateUser.name}</h1></Link>
            </div>
        </div>

    )
}

export default Card4