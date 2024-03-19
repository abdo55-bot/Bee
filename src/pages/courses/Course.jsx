import ReactStars from "react-rating-stars-component";
import { useContext } from "react";
import { DarkThemeContext } from "../../context/DarkTheme";
import { Link } from "react-router-dom";
import { Checkbox } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PropTypes from "prop-types";

const Course = ({
	status,
	img,
	title,
	videos,
	time,
	description,
	presenter,
}) => {
	const { dark } = useContext(DarkThemeContext);
	return (
		<div
			className={
				dark
					? "course flex flex-col justify-between items-center rounded-md relative bg-lightBlack text-white"
					: "event flex flex-col justify-between items-center rounded-md relative bg-white text-black"
			}
		>
			<div
				className={`status absolute top-2 z-20 right-2 rounded-md bg-primary py-1 px-2 ${
					dark ? `` : "text-white"
				}`}
			>
				{status}
			</div>
			<img src={img} alt="events/img" className="rounded-md  cursor-pointer" />
			<div
				className={`content flex flex-col justify-between items-end px-4 text-right 
         gap-2 ${dark ? "text-grey" : "text-black bg-[#F5F5F5] rounded-b-md"} `}
			>
				<div
					className={`title text-2xl  ${dark ? "text-white" : "text-black"} `}
				>
					{title}
				</div>
				<div className="time text-sm  ">
					<span>{videos} مقطع</span>/<span>{time}</span>
				</div>
				<div className="leading-2 text-sm">{description}</div>
				<div className="presenter text-sm text-right ">{presenter}</div>
				<div className="flex justify-between items-center w-full">
					<Checkbox
						aria-label="save"
						size="small"
						icon={
							<BookmarkBorderIcon
								className={`${dark ? "text-white" : "text-black"}`}
							/>
						}
						checkedIcon={<BookmarkIcon />}
					/>
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
					<Link
						to="/courseDetails"
						className="bg-primary rounded-full py-1 font-normal px-5 shadow text-white  shadow-black hover:scale-105 duration-150"
					>
						احجز الان
					</Link>
				</div>
			</div>
		</div>
	);
};

Course.propTypes = {
	status: PropTypes.bool,
	img: PropTypes.string,
	title: PropTypes.string,
	videos: PropTypes.any,
	time: PropTypes.string,
	description: PropTypes.string,
	presenter: PropTypes.string,
};

export default Course;
