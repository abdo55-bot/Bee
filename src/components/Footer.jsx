import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitterSquare, FaTiktok, FaFacebookSquare, FaLinkedin, FaYoutube, FaInstagramSquare, FaSquareYoutube } from '../helpers/icons';
import { useContext } from 'react';
import { DarkThemeContext } from '../context/DarkTheme';

const Footer = () => {
  const { dark} = useContext(DarkThemeContext);

  return (
    <div className={ `footer py-5 ${dark   ? 'bg-lightBlack' : 'bg-lightGrey' } flex `}>
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row  justify-center gap-10  md:gap-20 items-center w-full">

          <div className='social'>
            <ul className='flex justify-between gap-2 items-center  text-4xl'>
              <li className='hover:scale-75 duration-150'><Link to="https://www.tiktok.com/@bee.knowledge"> <FaTiktok /></Link></li>
              <li className='hover:scale-75 duration-150'><Link to="https://www.facebook.com/profile.php?id=100091523964308"> <FaFacebookSquare /></Link></li>
              <li className='hover:scale-75 duration-150'><Link to="https://www.linkedin.com/in/bee-undefined-060836290/" > <FaLinkedin /></Link></li>
              <li className='hover:scale-75 duration-150'><Link to="https://www.youtube.com/channel/UCWO3TX4cQc9DCBhbAGMsn3Q" > <FaSquareYoutube /></Link></li>
              <li className='hover:scale-75 duration-150'><Link to="https://www.instagram.com/beezz.co/?hl=en" > <FaInstagramSquare /></Link></li>
            </ul>
          </div>

          <div className="flex justify-center items-center ">
            <Link  to="/terms">
              <div className="text-3xl">سياسة الخصوصية</div>
            </Link>
          </div>
          <div className="we">
            <Link >
              <div className="text-3xl">من نحن</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer