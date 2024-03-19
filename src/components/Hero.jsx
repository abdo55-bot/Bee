import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkThemeContext } from "../context/DarkTheme";

const Hero = () => {
	const { dark, setDark } = useContext(DarkThemeContext);

	return (
		<div className="hero flex relative h-[80vh] md:h-auto">
			<div className="container flex relative">
				<img
					src={dark ? "img/hero.png" : "img/hero-light.png"}
					className="w-full max-h-[500px] h-auto "
					alt=""
				/>
				<div className="content flex justify-start items-center  absolute left-0 top-0 bottom-0 right-0 w-full h-full">
					<div className="mx-auto w-[700px] text-center flex flex-col gap-5 ">
						<div className="header text-5xl leading-tight font-semibold w-auto md:w-[500px] mx-auto">
							تعلم من اهم الخبراء فى جميع المجالات
						</div>
						<div
							className={
								dark
									? "caption text-lg text-grey w-auto md:w-[380px] mx-auto"
									: "caption text-lg text-black w-auto md:w-[380px] mx-auto"
							}
						>
							لاتفوت فرصة حضور اهم الاحداث و الحصول علي الدورات باقل الاسعار
						</div>
						<Link
							to="/login"
							className=" shadow-main  h-[70px] leading-snug text-3xl bg-primary text-white rounded-full py-2 px-5 text-center font-bold 
                     w-[250px] mx-auto hover:scale-105 duration-150"
						>
							ابدأ الان
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
