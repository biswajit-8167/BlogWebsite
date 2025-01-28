import React from 'react'
import { Link } from 'react-router-dom'
import SignUpImage from '../../assets/signin-image.webp'
function SignUp() {
    
    return (
        <div className="flex  justify-center font-[sans-serif] sm:h-screen p-4">
            <div>
               <img src={SignUpImage} alt="" className='w-[100%] h-[100%] object-cover' />
            </div>
            <div className="max-w-md w-full mx-auto">
                <div className="text-center mb-12">
                    <Link to="#"><img
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="logo" className='w-[80px] inline-block ' />
                    </Link>
                    <h1><span className="font-medium text-gray-600 text-[30px]">Create an account</span></h1>
                </div>

                <form>
                    <div class="space-y-6">
                        <div>
                            <label class="text-gray-800 text-sm mb-2 block">Email Id</label>
                            <input name="email" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Password</label>
                            <input name="password" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                            <input name="cpassword" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter confirm password" />
                        </div>

                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <label for="remember-me" className="text-gray-800 ml-3 block text-sm">
                                I accept the <Link to="#" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</Link>
                            </label>
                        </div>
                    </div>

                    <div className="!mt-8">
                        <button type="button" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                            Create an account
                        </button>
                    </div>
                    <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <Link  to="/login" className="text-blue-600 font-semibold hover:underline ml-1">Login here</Link></p>
                </form>
            </div>

        </div>
    )
}

export default SignUp