import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDarkMode } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineXMark } from 'react-icons/hi2';
import { Disclosure, Menu } from '@headlessui/react'
import { DarkThemeContext } from '../context/DarkTheme';
import {  useAuth } from '../context/Auth.jsx';
import '../styles/nav.css'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const navigation = [
    { name: 'الرئيسية', href: '/' },
    { name: 'التذاكر', href: 'tickets' }
]

const Navbar = () => {
    const { authUSer, setAuthUser, isLogged, setIsLogged } = useAuth();
    const { dark, setDark } = useContext(DarkThemeContext);


    const logout = () => {
        setAuthUser(null);
        setIsLogged(false);
        localStorage.removeItem('userAuth');
    }

    const [navbar,setnavbar]=useState(false);
    const onscrol=()=>{
        if(window.scrollY>30){
            setnavbar(true);
        }else{
            setnavbar(false);
        }
        
    }
    useEffect(()=>{
        window.addEventListener('scroll', onscrol);
        return ()=>{
            window.removeEventListener('scroll', onscrol);
        }
    },[])

    return (

        <Disclosure as="nav" className={`${dark ? 'bg-black text-white ' : 'bg-white text-black '} sticky top-0 z-30  ${navbar&&'shadow-lg transition duration-150'} `}  >
            {({ open }) => (
                <>
                    <div className="mx-auto  px-2 py-2 sm:px-6  lg:px-8  container ">
                        <div className="relative flex flex-row-reverse  h-16 items-center justify-between ">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2
                                text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 
                                focus:ring-inset focus:ring-white text-3xl">
                                    <span className="absolute " />
                                    {open ? (
                                        <HiOutlineXMark />
                                    ) : (
                                        <GiHamburgerMenu className='visited:outline-none focus:outline-none' />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex  items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex  gap-5 text-xl flex-row-reverse">
                                        <Link href="#" ><img src="img/logo.png" width={60} alt="logo/img"  /></Link>
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static  
                                                justify-center sm:w-auto 
                                                translate-x-[-50%] left-[50%] 
                                                sm:left-0
                                                sm:translate-x-0
                                                sm:inset-auto  sm:pr-0">

                                <Menu as="div" className="relative ml-9">
                                    <div className="left w-[220px] sm:w-auto flex gap-2 text-sm md:text-xl justify-between items-center">
                                        {!isLogged ? (
                                            <>
                                            <Link to="/login" className='rounded-md p-2 md:p-1'>تسجيل دخول</Link>
                                            <Link to="/register" className={`rounded-md p-2 md:p-1 border ${ dark ? 'border-white' : 'border-black'} `}>إنشاء حساب</Link>
                                            </>
                                        ): (
                                            <button className={`rounded-md p-2 md:p-1 border ${ dark ? 'border-white' : 'border-black'} `} 
                                                    onClick={logout}> تسجيل خروج</button>

                                        )}
                                        <MdDarkMode className='cursor-pointer text-xl' onClick={() => setDark(!dark)} />
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    as="a"
                                    to={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

    )
}

export default Navbar