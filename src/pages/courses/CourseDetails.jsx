import { BsBookmark, RiFileTextLine, LiaLanguageSolid, PiTimerBold, BsCalendarEvent, BiWalletAlt } from '../../helpers/icons';
import ReactStars from "react-rating-stars-component";
import ReactPlayer from 'react-player'
import { useState } from 'react';
import { useContext } from 'react';
import { DarkThemeContext } from '../../context/DarkTheme';
import ReservationModal from '../../components/ReservationModal';
import { eventsList } from '../Events/script';
import { Link } from 'react-router-dom';


const CourseDetails = () => {
  const [open, setOpen] = useState(false);
  const { dark } = useContext(DarkThemeContext);

  return (
    <div className="single-course">
      <div className="container">
        <div className='course-details row'>
          <div className="col-md-3 details relative " >
            <div className="absolute top-0 left-0 w-full h-full">

              <div className="sticky top-3 bg-[#F5F5F5] px-4 text-right text-black py-4 rounded-md " >
                <div className="header text-3xl mb-4 ">Hello World</div>
                <div className="flex justify-between items-center ">
                  <div className="icon w-10 h-10 rounded-full bg-[#D9D9D9] flex justify-center items-center">
                    <BsBookmark className='text-xl text-black' />
                  </div>
                  <button className='bg-primary text-white px-2 py-1 rounded-md text-sm'>جديد</button>
                </div>

                <div className="flex  flex-col gap-1 items-end justify-center text-black">
                  <div className="flex items-center flex-row-reverse gap-1 ">
                    <PiTimerBold />
                    <span>5</span>
                    <span>مقاطع /</span>
                    <span>time</span>
                  </div>

                  <div className="flex items-center flex-row-reverse gap-1">
                    <LiaLanguageSolid />
                    <span>اللغة العربية</span>
                  </div>
                  <div className="flex items-center flex-row-reverse gap-1">
                    <BiWalletAlt />
                    <span> 20% خصم</span>
                  </div>
                  <div className="flex items-center flex-row-reverse gap-1">
                    <BsCalendarEvent />
                    <span> تارخ الحدث</span>
                  </div>
                  <div className="flex items-center flex-row-reverse gap-1">
                    <RiFileTextLine />
                    <span> شهادة موثقة</span>
                  </div>
                  <div className="rating">
                    <ReactStars
                      count={5}
                      size={30}
                      activeColor={`#544DF6`}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star "></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                    />
                  </div>
                  <div className="flex items-center w-full gap-1 justify-center ">
                    <button onClick={() => setOpen(true)} className='bg-primary text-white py-1 text-sm px-4 rounded-full'>احجز الان</button>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div className="col-md-9 mt-[25rem] sm:mt-0">
            <ReactPlayer width={'100%'} url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
            <div className="address mt-5 flex gap-2 flex-row-reverse items-center">
              <img src="img/video.png" className='w-24 h-24 rounded-full' alt="" />
              <div className="info items-end flex flex-col gap-3">
                <div className="title text-3xl">Cat Reloaded</div>
                <div className="title text-base text-grey">Hello worl</div>
              </div>
            </div>
          </div>

        </div>
        <div className="row  mb-10">
          <div className="col-md-3"></div>
          <div className="col-md-9">

            <div className={`event-details text-right mb-3 ring-2 mt-3
                         ${dark ? `ring-white bg-lightBlack` : `ring-sky-200 bg-lightGrey`} 
                         rounded-md px-3 py-2 w-full`}>
              وصف الكورس    وصف الكورس
              وصف الكورس
              وصف الكورس
              وصف الكورس
              وصف الكورس
              وصف الكورس
              وصف الكورس
              وصف الكورس
              وصف الكورس
              وصف الكورس
              وصف الكورس
              وصف الكورس
              وصف الكورس
              وصف الكورس
              وصف الكورس

            </div>
          </div>
        </div>



        
        <div className="row mb-3">
          {eventsList.map((event, index) => (
          <div className="col-md-6 mb-2 card rounded-md  overflow-hidden" key={index}>
            <Link to="/eventDetails">
            <div className="flex ">
              <div className="col-md-4">
                <img src="img/video.png" alt="..." />
              </div>
              <div className="col-md-8 rounded-e-md pl-2 pt-2 bg-lightGrey text-lightBlack ">
                <div className="card-body ">
                  <h5 className="card-title ">{event.title}</h5>
                  <p className="text-sm">{event.description}</p>
                </div>
              </div>
            </div>
            </Link>
          </div>
          ))}
          
          <h1 className='fs-1 text-end'> <Link to="eventFeed" >See All</Link></h1>
        </div>
        



      </div>
      {open && (


        <ReservationModal open={open} setOpen={setOpen} />
      )}
    </div>
  )
}

export default CourseDetails