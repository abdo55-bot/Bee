import Course from './Course'
import { useContext, useEffect, useState } from 'react';
import { BsArrowRightCircle, BsArrowLeftCircle } from '../../helpers/icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { DarkThemeContext } from '../../context/DarkTheme';
import SwiperButtonNext from '../Events/SwiperNext';
import SwiperButtonPrev from '../Events/SwiperPrev';
import { courseList } from './script';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Swiper as SwiperInstance } from 'swiper'
import { useTranslation } from 'react-i18next';

const CourseList = () => {
    const { dark}= useContext(DarkThemeContext);
    const {t}=useTranslation();
    const {i18n}=useTranslation();
    
    useEffect(() => {
        return async () => {
            let res  = await axios.get(`${import.meta.env.VITE_BASE_URL}/courses`);
            console.log(res)
        }
    }, [])

    const [swiper, setSwiper] = useState(null)
    useEffect(() => {
      if (swiper) {
        swiper.rtlTranslate = i18n?.dir() === 'rtl'
      }
    }, [swiper, i18n?.dir()])

    
    return (
        <div className={`coursesFeed flex flex-col ${dark ? 'bg-black ' : 'bg-white '} py-5 relative`}>
            <div className="container">

                <div className="header flex justify-between items-center">
                    <Swiper
                        className='!pt-28 '
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        
                        
                      
                        breakpoints={{
                            425: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                                width: 390,
                            
                            },
                            // when window width is >= 768px
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 10,
                              width: 760
                            },
                            // when window width is >= 992px
                            992: {
                              slidesPerView: 3, 
                              spaceBetween: 30,
                              width: 1200
                            },
                          }}
                    >
                        <div className="header mt-2 absolute left-0 top-0 z-20 flex items-center sm:items-center 
                        justify-between w-full mb-10">
                            <div className="left navs flex  justify-between gap-2 items-center">
                                <div className="nav-left h-10 rounded-full p-2 ">
                                    <SwiperButtonNext>
                                        <BsArrowLeftCircle className='text-5xl cursor-pointer' />
                                    </SwiperButtonNext>
                                </div>
                                <div className="nav-left h-10  rounded-full p-2">
                                    <SwiperButtonPrev>

                                        <BsArrowRightCircle className='text-5xl cursor-pointer' />
                                    </SwiperButtonPrev>
                                </div>
                            </div>
                            <div className="right">
                                <div className="leading-8 text-2xl md:text-5xl  font-bold hover:underline text-end">
                                    <Link to="/courseFeed">  {t('Viewallcommunities')}  </Link> 
                                </div>
                            </div>
                        </div>

                        {courseList.map((course, index) => (

                            <SwiperSlide key={index}>
                                <Course
                                    img={course.img}
                                    status={course.status}
                                    title={course.title}
                                    videos={course.video}
                                    time={course.time}
                                    description={course.description}
                                    presenter={course.presenter}
                                    rating={course.rating}
                                />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default CourseList