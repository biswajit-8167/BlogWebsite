import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../../assets/Biswajit.jpg';
import WriteBlogs from '../Modal/WriteBlogs'; // Import WriteBlogs modal component

function Nav() {
  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility

  // Function to open the modal
  const openModal = () => {
    setIsModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <nav className="container mx-auto flex justify-between items-center p-4 font-poppins">
      <div className="flex items-center w-[5%]">
        <NavLink to="/">
          <h1 className="text-2xl font-bold text-blue-700 font-dmsans">Blog</h1>
        </NavLink>
      </div>

      <div className='w-[50%]'>
        <ul className="flex space-x-7">
          <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-[#030612] font-[500] text-[15px] font-inter" : "text-[#333333] font-[500] text-[15px] font-inter"} >Home</NavLink></li>
          <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-[#030612] font-[500] font-inter text-[15px]" : "text-[#333333] font-[500] font-inter text-[15px]"} >Blog</NavLink></li>
          <li><NavLink to="/categories" className={({ isActive }) => isActive ? "text-[#030612] font-normal text-[15px]" : "text-[#333333] font-[500] font-inter text-[15px]"} >Categories</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#030612] font-[500] font-inter text-[15px]" : "text-[#333333] font-normal text-[15px]"} >Contact</NavLink></li>
        </ul>
      </div>

      <div className='w-[30%] flex justify-end'>
        <ul className=" flex space-x-7">
          <li>
            <button
              onClick={openModal}
              className="text-blue-700 font-normal text-[14px]"
            >
              <i className="fa-regular fa-pen-to-square"></i>
              <span className='text-[15px] text-[#333333] font-[500] font-inter pl-2 underline underline-offset-4 hover:text-[#000000]'>Write Blogs</span>
            </button>
          </li>
          <li><NavLink to="/notification" className="text-blue-700 font-normal text-[15px]" ><i className="fa-solid fa-bell"></i></NavLink></li>
          <li><NavLink to="/profile"><img src={profile} alt="" className='w-[30px] h-[30px] rounded-full' /></NavLink></li>
        </ul>
      </div>

      {/* Show WriteBlogs modal if isModalVisible is true */}
      {isModalVisible && <WriteBlogs closeModal={closeModal} />}
    </nav>
  );
}

export default Nav;
