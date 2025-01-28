import React from 'react'
import SideBer from '../Components/blog/SideBer';
function Dashboard() {
    return (
        <>
            <div className='bg-[#000000]'>
                <nav className='container mx-auto flex justify-between items-center p-5 text-[#F5F5F5]'>
                    <h1 className='text-[18px] font-[600] text-[#F5F5F5] font-dmsans'>Dashboard</h1>
                    <button className='bg-[#0075FA] text-[#303030] w-[120px] h-[40px] rounded-[10px] ml-4 absolute right-0 font-medium text-[16px] font-inter hover:bg-[#ffffff] ease-in duration-300'>Logout</button>
                </nav>
            </div>


            {/* Body */}

            <div className='container mx-auto flex'>
                <div>
                    <SideBer/>
                </div>
                <div className='w-[70%] pt-[10px] pl-[10px]'>
                    <h1 className='text-[30px] font-[600] text-[#0075FA] font-dmsans'>Welcome to Dashboard</h1>
                    <p className='text-[15px] font-[400] text-[#171717] font-inter'>This is demo dashboard component built with react js and tailwind css</p>
                </div>
            </div>
        </>
    );
}

export default Dashboard