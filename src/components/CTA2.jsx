import { useContext } from "react";
import { DarkThemeContext } from "../context/DarkTheme";
import { Link } from "react-router-dom";
import { Checkbox } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const CTA2 = () => {
	const { dark } = useContext(DarkThemeContext);

	return (
		<div className="cta my-20 ">
			<div className="container">
				<div
					className={`flex justify-between items-center flex-col gap-14 sm:gap-8  ${
						dark ? "bg-lightBlack" : "bg-lightGrey"
					} md:flex-row  items-start md:gap-3  pr-0 md:pr-4 rounded-xl`}
				>
					<div className="left md:w-[60%] w-full ">
						<img className="md:w-fit" src="img/video.png" alt="" />
					</div>
					<div
						className={`right h-auto  md:w-[40%] w-full text-center md:text-right flex flex-col justify-between gap-4  py-6 `}
					>
						<div
							className={`leading-2 text-5xl font-normal ${
								dark ? "text-white" : "text-black"
							}`}
						>
							التسويق الرقمى
						</div>
						<div className="content flex flex-col gap-4 text-center mt-10 items-center md:items-end">
							<div className="flex flex-row-reverse justify-start gap-2 text-2xl">
								<img
									className="w-14 h-14 rounded-full"
									src="img/video.png"
									alt=""
								/>
								<div className="info flex justify-center flex-col ">
									<div className="name text-lg font-semibold">احمد محمود</div>
									<div
										className={
											dark
												? "title text-sm text-grey"
												: "title text-sm text-black"
										}
									>
										خبير فى التسويق الالكترونى
									</div>
								</div>
							</div>
							<div
								className={`text-xl font-light w-auto lg:w-[80%] mt-2 ${
									dark ? "text-grey" : "text-black"
								}`}
							>
								احترف التسويق الرقمى و عزز مسارك المهنى بامتلاك المهارة الاكثر
								طلبا فى سوق العمل
							</div>
							<div className="buttons flex flex-row-reverse gap-5 text-center justify-center w-full mt-2 ">
								<Link
									to="/eventDetails/1"
									className="rounded-full leading-10 text-white bg-primary font-medium  px-12 shadow-main flex items-center hover:scale-105 duration-150"
								>
									اذهب الى الدورة
								</Link>

								<Checkbox
									className={`w-14 h-14`}
									aria-label="save"
									size="large"
									icon={
										<BookmarkBorderIcon
											className={`${dark ? "text-white" : "text-black"}`}
										/>
									}
									checkedIcon={<BookmarkIcon />}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CTA2;
