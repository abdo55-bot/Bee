import { useContext } from "react";
import { DarkThemeContext } from "../context/DarkTheme";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



const CTA = () => {
	const { dark } = useContext(DarkThemeContext);
const {t} =useTranslation();
const {i18n}=useTranslation();


	return (
		<div className="cta my-20 ">
			<div className="container">
				<div
					className={`flex justify-between items-center flex-col gap-14 sm:gap-8  ${
						dark ? "bg-lightBlack" : "bg-lightGrey"
					} md:flex-row  items-start md:gap-3   md:pr-4 rounded-xl `}
				>
					<div className="left md:w-[60%] w-full">
						<img className="md:w-fit" src="img/video.png" alt="" />
					</div>
					<div
						className={`right h-auto  md:w-[48%] w-full text-center  md:text-right flex flex-col justify-between gap-4  py-6 `}
					>
						<div
							className={`leading-2 text-center text-3xl  font-normal ${
								dark ? "text-white" : "text-black"
							} ${i18n.language== 'en' ?'':'text-5xl'}`} 
						>
            						{t("DigitalMarketing")}						</div>
									<div className={`content flex flex-col gap-4 text-center mt-10 ${i18n.language === 'ar' ? 'items-center' : 'items-end'} `}>
							<div className={`flex   justify-center  gap-2 text-2xl  w-[100%] `}>
								<img
									className="w-14 h-14 rounded-full "
									src="img/video.png"
									alt=""
								/>
								<div className="info flex justify-center flex-col ">
									<div className="name text-lg font-semibold"> {t('Ahmedmahmoud')}</div>
									<div
										className={
											dark
												? "title text-sm text-grey"
												: "title text-sm text-black"
										}
									>
										{t('Expertinelectronicmarketing')}
									</div>
								</div>
							</div>
							<div
								className={`text-xl font-light w-auto  mt-2 ${
									dark ? "text-grey" : "text-black"
								}`}
							>
							{t('MasterdigitalmarketingandenhanceyourcareerpathbypossessingthemostskillsDemandinthelabormarket')}
							</div>
							<div className="buttons flex flex-row-reverse gap-5 text-center justify-center w-full mt-2 ">
								<Link
									to="/eventDetails/1"
									className="rounded-full flex items-center text-white bg-primary font-medium  px-12 shadow-main hover:scale-105 duration-150 "
								>
									{t('Gotothecourse')}
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

export default CTA;
