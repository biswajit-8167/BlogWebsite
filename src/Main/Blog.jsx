import React, { useState } from 'react'
import Card1 from '../Components/blog/Card1'
import Card2 from '../Components/blog/Card2'
import Card3 from '../Components/blog/Card3'
import Card4 from '../Components/blog/Card4'
import Footer from '../Components/blog/Footer'
import Subscrib from '../Components/blog/Subscrib'
import profile from '../assets/profile.png'
import Image1 from '../assets/image1.png'
import BlogNav from '../Components/blog/BlogNav'
import Nav from '../Components/blog/Nav'

function Blog() {
  //  const [isVisible, setIsVisible] = useState(false);

   const user = [
      {
         fullname: 'Soubhik Mridha',
         date: 'December 12, 2024',
         title: '5-Minute Morning Routine to Boost Productivity',
         discription: 'In todays fast-paced world, staying ahead means constantly learning and adapting.',
         image1: './image2.png'
      },
      {
         fullname: 'Soubhik Mridha',
         date: 'December 12, 2024',
         title: 'Top 3 Budget-Friendly Travel Hacks',
         discription: 'In todays fast-paced world, staying ahead means constantly learning and adapting.',
         image1: './image2.png'
      },
      {
         fullname: 'Soubhik Mridha',
         date: 'December 12, 2024',
         title: '5-Minute Morning Routine to Boost Productivity',
         discription: 'In todays fast-paced world, staying ahead means constantly learning and adapting.',
         image1: './image2.png'
      },
      {
         fullname: 'Soubhik Mridha',
         date: 'December 12, 2024',
         title: '5-Minute Morning Routine to Boost Productivity',
         discription: 'In todays fast-paced world, staying ahead means constantly learning and adapting.',
         image1: './image2.png'
      },

   ];

   const people = [
      {
         fullname: 'Soubhik Mridha',
         date: 'December 12, 2024',
         title: 'Why Minimalism in Modern Design',
         discription: 'In a cluttered world, less is more. Minimalist design emphasizes clarity, simplicity, and purpose. By stripping away the unnecessary, you allow users to focus on what truly matters.',
         image: './image4.png'
      },
      {
         fullname: 'Soubhik Mridha',
         date: 'December 12, 2024',
         title: 'Why Minimalism is the Key ?',
         discription: 'In a cluttered world, less is more. Minimalist design emphasizes clarity, simplicity, and purpose. By stripping away the unnecessary, you allow users to focus on what truly matters.',
         image: './image3.png'
      },
      {
         fullname: 'Soubhik Mridha',
         date: 'December 12, 2024',
         title: 'The Key of Modern Design.',
         discription: 'In a cluttered world, less is more. Minimalist design emphasizes clarity, simplicity, and purpose. By stripping away the unnecessary, you allow users to focus on what truly matters.',
         image: './image4.png'
      },
   ];

   const cateUser = [
      {
         image: './catagori1.png',
         name: 'Education & Learning',
      },
      {
         image: './catagori2.png',
         name: 'Travel & Adventure',
      },
      {
         image: './catagori3.png',
         name: 'Business & Finance',
      },
      {
         image: './catagori4.png',
         name: 'Lifestyle & Wellness',
      },
      {
         image: './catagori5.png',
         name: 'Design & Creativity',
      },
      {
         image: './catagori6.png',
         name: 'Technology & Innovation',
      },
   ]
   return (
      <>
         <div>
           <Nav/>
         </div>
         <div className='flex flex-col justify-center items-center pt-[30px]'>
            <h1 className='text-[35px] font-[400] text-[#030612] font-dmsans'><span>🎉</span>Limited Offer<span className='transform rotate-180 scale-y-[-1]'>🎉</span></h1>
            <p className='text-[17px] font-normal text-[#666666] font-poppins'>Subscribe today and get exclusive access to premium content!</p>
            <div className='flex justify-center items-center mt-[20px] relative'>
               <input type="email" placeholder='Enter your email to subscribe' className='border-[1px] border-[#0075FA] w-[600px] h-[50px] rounded-[10px] pl-4 relative text-[#999999] text-[15px] font-inter font-normal outline-none' />
               <button className='bg-blue-700 text-[#F5F5F5] w-[150px] h-[50px] rounded-[10px] ml-4 absolute right-0 font-medium text-[18px] font-inter hover:bg-[#171717] ease-in duration-300'>Subscribe</button>
            </div>
         </div>

         {/*  Featured Blog Posts */}

         <div className='container mx-auto flex justify-between items-center pt-[50px]'>
            <h1 className=' text-[40px] font-[400] text-[#030612] font-dmsans'>Featured Blog Posts</h1>
            <a href="/blog"><p className='text-[17px] font-[700] text-[#0075FA] font-inter hover:text-[#000000] ease-in duration-300'>See all <i className="fa-solid fa-arrow-right"></i></p></a>
         </div>

         <div className='container mx-auto flex justify-between pt-[30px]'>
            <div className='w-[46%]'><Card1
               image={Image1}
               profile1={profile}
               fullname={'Sourav Mridha'}
               date={'December 12, 2024'}
               title={'Why Minimalism is the Key to Modern Design'}
               discription={"In a cluttered world, less is more. Minimalist design emphasizes clarity, simplicity, and purpose. By stripping away the unnecessary, you allow users to focus on what truly matters. Whether it’s a sleek interface or a clean graphic, minimalism not only looks modern but enhances functionality. Next time you design, ask yourself: “What can I remove to improve this?"}

            />
            </div>
            <div className='w-[46%] flex flex-col gap-[30px]'>
               {user.map((user, title) => (
                  <div key={title}>
                     <Card2 user={user} />
                  </div>
               ))}
            </div>
         </div>
         <div className='absolute bottom-[-460px] right-[500px] text-[30px] text-[#1067CB]'>
            <i className="fa-solid fa-chevron-down"></i>
         </div>

         {/*  Trending Blog Posts */}

         <div className='container mx-auto flex justify-between items-center pt-[50px]'>
            <h1 className=' text-[40px] font-[400] text-[#030612] font-dmsans'>Trending Blog Posts</h1>
            <a href="/blog"><p className='text-[17px] font-[700] text-[#0075FA] font-inter hover:text-[#000000] ease-in duration-300'>See all <i className="fa-solid fa-arrow-right"></i></p></a>
         </div>
         <div className='container mx-auto grid grid-cols-3 gap-[30px] pt-[30px]'>
            {people.map((people, index1) => (
               <div key={index1}>
                  <Card3 people={people} />
               </div>
            ))}
         </div>

         {/*  Categories */}

         <div className='container mx-auto flex justify-between items-center pt-[50px]'>
            <h1 className=' text-[40px] font-[400] text-[#030612] font-dmsans'>Categories </h1>
            <a href="/blog"><p className='text-[17px] font-[700] text-[#0075FA] font-inter'>See all <i className="fa-solid fa-arrow-right"></i></p></a>
         </div>
         <div className='container mx-auto grid grid-cols-6 gap-[30px] pt-[30px] '>
            {cateUser.map((cateUser, index2) => (
               <div key={index2}>
                  <Card4 cateUser={cateUser} />
               </div>
            ))}
         </div>

         {/* Subscrib */}

         <div className='container mx-auto pt-[50px]'>
            <Subscrib />
            <div className='w-[100%] h-[1px] bg-[#0075FA] my-[50px]'></div>
         </div>

         {/* BlogNav */}

         <div className='container mx-auto'>
            <BlogNav />
         </div>

         {/* Footer */}

         <div className='container mx-auto pt-[50px]'>
            <Footer />
         </div>


      </>
   )
}

export default Blog