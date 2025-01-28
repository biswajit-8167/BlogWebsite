import React,{ useState} from 'react'

function PrivateRoutes({children}) {

   const [loggedIn, setLoggedIn] =useState(false)
     if(!loggedIn){
        return children
     }
     else{
        return (
        <div className='text-[30px] font-[600] text-[#0075FA] font-dmsans'>
            <h1>!Not Authorized</h1>
            <button className='bg-blue-700 text-[#F5F5F5] w-[150px] h-[50px] rounded-[10px] ml-4 absolute right-0 font-medium text-[18px] font-inter hover:bg-[#000000] ease-in duration-300' onClick={() => setLoggedIn(true)}>Log In</button>
        </div>
        
        )
     }
  
}

export default PrivateRoutes