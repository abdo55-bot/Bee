import { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowRightCircle, BsArrowLeftCircle } from '../../helpers/icons'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import Event from './Event';
import SwiperButtonPrev from './SwiperPrev';
import SwiperButtonNext from './SwiperNext';
import { DarkThemeContext } from '../../context/DarkTheme';
import { eventsList } from './script';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';



const EventList = () => {
    const { dark } = useContext(DarkThemeContext);
    const [Events, setEvent] = useState([]);

    useEffect(() => {

        return async () => {

            const events = await axios.get(`${import.meta.env.VITE_BASE_URL}/events`, {
                Headers: {
                    Accept: 'application/json'
                }
            })

            console.log(events);
        }
    }, [])

    return (
        <div className={dark ? 'eventFeed flex flex-col bg-black py-5 relative'
            : 'eventFeed flex flex-col bg-white py-5 relative'}>
            <div className="container">

                <div className="header flex justify-between items-center">
                    <Swiper
                        className='!pt-28 '
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}

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
                                slidesPerView: 4,
                                spaceBetween: 30,
                                width: 1200
                            },
                        }}
                    >
                        <div className="header mt-2 absolute left-0 top-0 z-20 flex items-end sm:items-center 
                        justify-between w-full mb-10">
                            <div className="left navs flex w-[100px] justify-between gap-2 items-center">
                                <div className="nav-left h-10 rounded-full p-2">
                                    <SwiperButtonNext>
                                        <BsArrowLeftCircle className='text-5xl cursor-pointer' />
                                    </SwiperButtonNext>
                                </div>
                                <div className="nav-left  h-10 rounded-full p-2">
                                    <SwiperButtonPrev>

                                        <BsArrowRightCircle className='text-5xl cursor-pointer' />
                                    </SwiperButtonPrev>
                                </div>
                            </div>
                            <div className="right">
                                <div className="leading-5 text-2xl md:text-5xl font-bold hover:underline">
                                    <Link to="/eventFeed">   شاهد كل الاحداث </Link>
                                </div>
                            </div>
                        </div>

                        {eventsList.map((event, index) => (

                            <SwiperSlide key={index}>
                                <Event
                                    img={event.img}
                                    status={event.status}
                                    title={event.title}
                                    videos={event.video}
                                    time={event.time}
                                    description={event.description}
                                    presenter={event.presenter}
                                    rating={event.rating}
                                />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default EventList