import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../assets/tail.png'
function LogIn() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
         <div>
          <img src={Icon} alt='icon' className='w-[80px] pb-[30px]'></img>
         </div>
        <h1 className='text-[20px] font-[600] text-[#030612] font-dmsans pb-[15px]'>Sign in to see the Blog Website</h1>

        {/*form*/}

        <form className='flex flex-col gap-4  p-4'>
          <div className='flex flex-col gap-1'>
          <label className='text-[13px] font-[400] text-[#666666] font-inter pb-[5px]'>Email Address</label>
          <input type='email' placeholder='Enter your email' className='border  border-[#a8a8a8]  w-[400px] h-[30px] rounded-[5px] pl-4 text-[#999999] text-[15px] font-inter font-normal outline-none drop-shadow-md'/>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex justify-between pb-[5px]'>
            <label className='text-[13px] font-[400] text-[#666666] font-inter'>Password</label>
            <label className='text-[13px] font-[400] text-[#666666] font-inter cursor-pointer'><Link>Forgot Password?</Link></label>
            </div>
            <input type='password' placeholder='Enter your password' className='border  border-[#a8a8a8]  w-[400px] h-[30px] rounded-[5px] pl-4 text-[#999999] text-[15px] font-inter font-normal outline-none drop-shadow-md'/>
          </div>
        
          <button className='bg-blue-700 text-[#F5F5F5] w-full h-[30px] rounded-[10px] font-medium text-[16px] font-inter hover:bg-[#000000] ease-in duration-300'>Sign In</button>
          <div className='flex justify-center pt-[20px]'>
            <p className='text-[14px] font-[400] text-[#666666] font-inter'>Don't have an account? <Link className='text-[#0075FA] hover:text-[#000000] ease-in duration-300 cursor-pointer'>Sign Up</Link></p>
          </div>
        </form>
    </div>
  )
}

export default LogIn