import { useSwiper } from "swiper/react";

// eslint-disable-next-line react/prop-types
const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>{children}</button>;
};

export default SwiperButtonNext