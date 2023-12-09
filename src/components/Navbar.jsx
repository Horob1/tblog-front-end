import {React, useState} from 'react';
import logo from '../assets/blog.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

const Navbar = () => {
  const [toggle, setToggle] =useState(false);
  const handleClick = () => setToggle(!toggle);
  const goToAdmin = () => {
    window.location.href = "https://strapi-tblog-api.onrender.com/admin";
  };

  return (
    <div className='w-full h-[80px] z-10 bg-white sticky top-0 drop-shadow-lg '>
      <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
        <div className='flex item-center px-8'>
          <img src={logo} alt="Logo" className='sm:ml-10 ss:ml-10 md-ml-3 w-[100%] h-[30px]' />
        </div>

        <div className='flex items-center'>
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className='hidden md:flex sm:mr-10 md:mr-10'>
          <button className='px-8 py-3' onClick={goToAdmin}>Login</button>
        </div>

        <div className='md:hidden' onClick={handleClick}> 
            <img src={!toggle?menu:close} alt="menu" className='w-[28px] h-[28px] object-contain mr-10 '/>
        </div>
      </div>
      <ul className={toggle?'absolute bg-white w-full px-8 md:hidden':'hidden'}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <div className='flex flex-col my-4'>
            <button className='px-8 py-3' onClick={goToAdmin}>Login</button>
          </div>
        </ul>
    </div>
  )
}

export default Navbar