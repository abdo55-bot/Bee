import React from 'react'
import { FaCloudDownloadAlt, BsCalendarEvent, BiWalletAlt } from '../helpers/icons';
import { useContext } from 'react';
import { DarkThemeContext } from '../context/DarkTheme';
import { Link } from 'react-router-dom';

const Reservation = () => {
    const { dark } = useContext(DarkThemeContext);
    return (
        <div className='reservation bg-lightGrey py-5 h-auto'>
            <div className="container">
                <div className='course-details flex items-center gap-5 flex-col-reverse md:flex-row justify-between md-gap-3 md:items-start'>

                    <div className="left bg-white md:w-1/2  w-full shadow-md rounded-md " >

                        <div className=" text-right text-black p-4 rounded-md flex flex-col gap-2   " >
                            <div className="header text-3xl mb-4 ">ستحصل على</div>


                            <div className="flex  flex-col text-xl gap-2  items-end justify-center text-black">


                                <div className="flex items-center flex-row-reverse gap-1">
                                    {/* <LiaLanguageSolid /> */}
                                    <span className='font-bold'>%</span>
                                    <span>     خصم على التذاكر    </span>
                                </div>
                                <div className="flex items-center flex-row-reverse gap-1">
                                    <FaCloudDownloadAlt />
                                    <span> محتوى الحدث مجانا </span>
                                </div>

                            </div>
                            <div className="payments mt-5">
                                <div className="heading">طرق الدفع</div>
                                <div className="row whitespace-nowrap g-0">
                                    <div className="col"><Link to="" ><img className='col-xs-3' src="img/payment1.png" alt="" /></Link></div>
                                    <div className="col"><Link to="" ><img className='col-xs-3' src="img/paymob.png" alt="" /></Link></div>
                                    <div className="col"><Link to="" ><img className='col-xs-3' src="img/payment1.png" alt="" /></Link></div>
                                    <div className="col"><Link to="" ><img className='col-xs-3' src="img/payment1.png" alt="" /></Link></div>
                                </div>
                                <div className="text-sm">الاسعار معرضة للتغيير وقد تختلف وفقا للبلد ومعدل تحويل العملة و الرسوم البنكية وخطة الاشتراكز <Link className='text-primary' to="">الشروط و الاحكام</Link></div>
                            </div>


                        </div>

                    </div>



                    <div className="right flex flex-col items-end  justify-start text-black">
                        <div className="heading text-5xl font-bold">Hellow World</div>
                        <div className="desc text-2xl text-right mt-2 text-lightBlack">احجز تذكرة لحضور حدث Hello World التابع لمؤسسةCAT Reload</div>

                        <div className="flex flex-col items-end gap-2 mt-3 text-xl">
                            <div className="date flex gap-1 justify-between items-center ">
                                <span> تاريخ الحدث</span>
                                <BsCalendarEvent />
                            </div>
                            <div className="discount flex justify-between gap-1 items-center ">
                                <span> 20% خصم</span>
                                <BiWalletAlt />
                            </div>
                            {/* <div className="flex items-end flex-col  gap-1">

                                <span> عدد التذاكر</span>
                                <input className='w-20 rounded-sm outline-none ' type="number" min={0} />
                            </div> */}
                            <div className="flex items-end flex-col  gap-1">

                                <span>  هل لديكم قسيمة خصم؟</span>
                                <div className="flex flex-row-reverse gap-3">
                                    <input type="text" placeholder='قسيمة الخصم' 
                                     className='px-2 rounded-sm outline-none text-right'/>
                                    <button type="submit"  className='bg-transparent rounded-md p-2 hover:bg-primary ease-in hover:text-white border-2  border-primary
                                    ' >تطبيق</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reservation