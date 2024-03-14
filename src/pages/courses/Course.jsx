import { BsBookmark } from '../../helpers/icons';
import ReactStars from "react-rating-stars-component";
import { useContext } from 'react';
import { DarkThemeContext } from '../../context/DarkTheme';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Course = ({ status, img, title, videos, time, description, presenter }) => {

    const { dark } = useContext(DarkThemeContext)
    return (
        <div
            className={dark ? 'course flex flex-col justify-between items-center rounded-md relative bg-lightBlack text-white'
                : 'event flex flex-col justify-between items-center rounded-md relative bg-white text-black'}>

            <div className={`status absolute top-2 z-20 right-2 rounded-md bg-primary py-1 px-2 ${dark ? `` : 'text-white'}`}>
                {status}
            </div>
            <img src={img} alt="" className='rounded-md hover:scale-105 duration-150 cursor-pointer' />
            <div className={`content flex flex-col justify-between items-end px-4 text-right 
         gap-2 ${dark ? 'text-grey' : 'text-black bg-[#F5F5F5] rounded-b-md'} `}>

                <div className={`title text-2xl  ${dark ? 'text-white' : 'text-black'} `}>{title}</div>
                <div className="time text-sm  ">
                    <span>{videos} مقطع</span>/
                    <span>{time}</span>
                </div>
                <div className="leading-2 text-sm">{description}</div>
                <div className='presenter text-sm text-right '>{presenter}</div>
                <div className="flex justify-between items-center w-full">
                    <div className={`bookmark w-8 h-8 flex justify-center items-center rounded-full
             ${dark ? 'bg-white text-black' : 'text-black bg-grey font-bold'} cursor-pointer hover:bg-primary transition duration-100`}>
                        <BsBookmark className={dark ? '' : 'font-bold'} />
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
                </div>
                <div className="reserve flex justify-center items-center w-full py-5">
                    <Link to="/courseDetails" className='bg-primary rounded-full py-1 font-normal px-5 shadow text-white  shadow-black hover:scale-105 duration-150' >احجز الان</Link>
                </div>

            </div>
        </div>
    )
}

export default Course