import React, { useContext } from 'react'
import { DarkThemeContext } from '../context/DarkTheme'
import { Link } from 'react-router-dom';
import { BsBookmark } from '../helpers/icons'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const tickets = [1, 2, 3, 4]
const Teckits = () => {
    const [events, setEvents] = useState([]);
    const { dark } = useContext(DarkThemeContext);

    const getEvents = async () => {
        const events = await axios.get(`${import.meta.env.VITE_BASE_URL}/events`);
        setEvents(events.data[0].data.data)
        console.log(events.data[0].data.data);
    }
    
    useEffect(() => {
        getEvents();        
    }, [])
    return (
        <div className='tickets mt-5'>
            <div className="container">
                {events.map((t, index) => (

                    <div key={index}
                        className={`ticket flex justify-between items-center mb-5 flex-col gap-14 sm:gap-8 
                                    ${dark ? 'bg-lightBlack' : 'bg-lightGrey'} 
                                    md:flex-row  items-start md:gap-3  pr-0 md:pr-4 rounded-xl`} >

                        <div className="left md:w-[60%] w-full ">
                            <img className='md:w-fit' src="img/video.png" alt="" />
                        </div>
                        <div className={`right h-auto  md:w-[40%] w-full text-center md:text-right flex flex-col justify-between gap-4  py-6 `}>
                            <div className={`leading-5 text-5xl font-normal ${dark ? 'text-white' : 'text-black'} `}>
                              {t.title}
                            </div>
                            <div className="content flex flex-col gap-4 text-right mt-10 items-center md:items-end">
                                <div className="flex flex-row-reverse  justify-start gap-2 text-2xl   ">
                                    <img className='w-14 h-14 rounded-full ' src="img/video.png" alt="" />
                                    <div className="info flex justify-center flex-col ">
                                        <div className="name text-lg font-semibold">{t.speakers[0].full_name} </div>
                                        <div className={dark ? "title text-sm text-grey" : 'title text-sm text-black'} > {t.speakers[0].full_name} </div>
                                    </div>
                                </div>
                                <div className={dark ? "text-xl font-light w-auto lg:w-[80%] mt-2 text-grey"
                                    : 'text-xl font-light w-auto lg:w-[80%] mt-2 text-black'}>
                                    {t.description}
                                </div>
                                <div className="buttons flex flex-row-reverse gap-5 text-center justify-center w-full mt-2 ">

                                    <Link to={`/eventDetails/${t.id}`} className='rounded-full leading-10 text-white bg-primary font-medium  px-12 shadow-main '>
                                        اذهب الى الدورة
                                    </Link>
                                    <button className={dark ?
                                        'rounded-full w-14 h-14 bg-white flex justify-center items-center  font-medium  text-black'
                                        : 'rounded-full w-14 h-14 bg-black flex justify-center items-center  font-medium  text-white'}>
                                        <BsBookmark className={`text-2xl ${dark ? 'text-black' : 'text-white'} `} />
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Teckits