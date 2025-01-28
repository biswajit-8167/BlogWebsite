import React from 'react'

function Subscrib() {
    return (
        <div className='flex justify-between items-center gap-[10%]'>
            <div className='w-[40%]'>
                <h1 className='text-[30px] font-[600] text-[#030612] font-dmsans '>Newsletter Reminder</h1>
                <p className='text-[13px] font-[400] text-[#666666] font-inter'>Subscribe today and get exclusive access to premium content!</p>
            </div>
            <div className='w-[50%]'>
                <div className='flex justify-center items-center mt-[20px] relative'>
                    <input type="email" placeholder='Enter your email to subscribe' className='border-[1px] border-[#0075FA]  w-[600px] h-[50px] rounded-[10px] pl-4 relative text-[#999999] text-[15px] font-inter font-normal outline-none' />
                    <button className='bg-blue-700 text-[#F5F5F5] w-[150px] h-[50px] rounded-[10px] ml-4 absolute right-0 font-medium text-[18px] font-inter hover:bg-[#000000] ease-in duration-300'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Subscrib