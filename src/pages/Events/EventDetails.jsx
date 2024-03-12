import React, { useEffect } from "react";
import {
  BsBookmark,
  RiFileTextLine,
  LiaLanguageSolid,
  PiTimerBold,
  BsCalendarEvent,
  BiWalletAlt,
} from "../../helpers/icons";
import ReactStars from "react-rating-stars-component";
import ReactPlayer from "react-player";
import { useState } from "react";
import { useContext } from "react";
import { DarkThemeContext } from "../../context/DarkTheme";
import ReservationModal from "../../components/ReservationModal";
import { useParams } from "react-router-dom";
import axios from "axios";
import GridLoader from "react-spinners/GridLoader";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const EventDetails = () => {
  const [open, setOpen] = useState(false);
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const { dark } = useContext(DarkThemeContext);
  const { id } = useParams();

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/events/event`,
      {
        params: {
          id,
        },
      }
    );

    const event = res.data[0].data;
    console.log(event);
    setEvent(event);
  };

  return event ? (
    <div className="single-course min-h-[100vh] h-full">
      <div className="container">
        <div className="course-details row">
          <div className="col-md-3 details relative ">
            <div className="absolute top-0 left-0 w-full h-1/2">
              <div className="sticky top-3 bg-[#F5F5F5] px-4 text-right text-black py-4 rounded-md ">
                <div className="header text-3xl mb-4 ">{event.title}</div>
                <div className="flex justify-between items-center ">
                  <div className="icon w-10 h-10 rounded-full bg-[#D9D9D9] flex justify-center items-center">
                    <BsBookmark className="text-xl text-black" />
                  </div>
                  {event.is_new ? (
                    <button className="bg-primary text-white px-2 py-1 rounded-md text-sm">
                      جديد
                    </button>
                  ) : (
                    ""
                  )}
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
                    <span>{event.category} </span>
                  </div>
                  <div className="flex items-center flex-row-reverse gap-1">
                    <BiWalletAlt />
                    <span> 20% خصم</span>
                  </div>
                  <div className="flex items-center flex-row-reverse gap-1">
                    <BsCalendarEvent />
                    <span> {event.publish_date}</span>
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
                    <button
                      onClick={() => setOpen(true)}
                      className="bg-primary text-white py-1 text-sm px-4 rounded-full"
                    >
                      احجز الان
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 h-[100vh] mt-[25rem] sm:mt-0">
            <ReactPlayer
              width={"100%"}
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            />
            <div className="address mt-5 flex gap-2 flex-row-reverse items-center">
              <img
                src="img/video.png"
                className="w-24 h-24 rounded-full"
                alt=""
              />
              <div className="info items-end flex flex-col gap-3">
                <div className="title text-3xl">
                  {" "}
                  {event.speakers[0].first_name} {event.speakers[0].last_name}{" "}
                </div>
                <div
                  className={`title text-base ${
                    dark ? `text-grey` : `text-lightBlack`
                  } `}
                >
                  {event.speakers[0].field}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <div
              className={`event-details text-right mb-3 ring-2 ${
                dark ? `ring-white bg-lightBlack` : `ring-sky-200 bg-lightGrey`
              } rounded-md px-3 py-2 w-full`}
            >
              {event.description}
            </div>
          </div>
        </div>
        <div className="speakers text-right mb-5 overflow-hidden">
          <div className="heading text-2xl mb-2">المتحدثون</div>
          <div className="flex gap-3 float-right ">
            {event.speakers.map((speaker, index) => (
              <div className="speaker text-center max-w-[200px]" key={index}>
                <img
                  src="img/hero.png"
                  className="rounded-full w-20 h-20"
                  alt="speaker"
                />
                <div className="name"> {speaker.first_name} </div>
                <div className="job text-xs"> {speaker.field}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {open && <ReservationModal open={open} setOpen={setOpen} />}
    </div>
  ) : (
    <GridLoader
      color="#544DF6"
      loading={loading}
      cssOverride={override}
      size={30}
      className="min-h-[100vh]"
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default EventDetails;
