import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.png'
import { setOpenCart } from '../app/CartSlice.js';
const Navbar = () => {
    const [navState, setNavState] = useState(false);
    const dispatch = useDispatch();
    const onCartToggle= () => {
        dispatch(setOpenCart())
    }
    const onNavScroll = () => {
        if(window.scrollY > 30){
            setNavState(true);
        }else {
            setNavState(false);
        }
        useEffect(() => {
            window.addEventListener('scroll', onNavScroll);
            return () => {
                window.removeEventListener('scroll', onNavScroll);
            }
        },[]);
    }
  return (
    <>
      <header className={`absolute top-7 left-0 right-0 opacity-100 z-50`}>
        <nav className='flex items-center justify-between  nike-container'>
            <div>

                <img src={logo}
                 alt="logo/img"
                 className='w-16 h-auto' />
            </div>
         
         <ul className='flex items-center justify-center gap-2'>

            <li className='grid items-center'>
             <MagnifyingGlassIcon className='icon-style' />
            </li>

            <li className='grid items-center'>
                <HeartIcon className='icon-style' />
            </li>
              
            <li className='grid items-center'>
            <button type='button' onClick={onCartToggle} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                  <ShoppingBagIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`}/>

                  <div className={`absolute top-4 right-0
                  bg-white text-slate-900 shadow shadow-slate-100 w-4 h-4
                  text-[0.65rem] leading-tight font-medium rounded-full flex items-center
                  justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100'}`}>0</div>
               </button>
            </li>
         </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
