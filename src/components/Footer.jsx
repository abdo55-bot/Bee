import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitterSquare, FaTiktok, FaFacebookSquare, FaLinkedin, FaYoutube, FaInstagramSquare, FaSquareYoutube } from '../helpers/icons';
import { useContext } from 'react';
import { DarkThemeContext } from '../context/DarkTheme';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { dark} = useContext(DarkThemeContext);
  const {t}=useTranslation();
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
            <Link  to="/terms" className='hover:underline'>
              <div className="text-3xl ">{t('privacypolicy')}</div>
            </Link>
          </div>
          <div className="we">
            <Link className='hover:underline'>
              <div className="text-3xl "> {t('whoarewe')}</div>
            </Link>
          </div>
        
        </div>
        <div className='mt-5 text-center ' >
            <p className='text-sm md:text-center sm:pr-6 cursor-pointer' onClick={handleScrollToTop}>{t('Copyright')}<span className='text-base font-bold'>&copy;</span> {t('AllReservedRights')} <span className='font-semibold'>Bee </span></p>
          </div>
      </div>
    </div>
  )
}

export default Footer