import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import EventDetails from "../pages/Events/EventDetails";
import Reservation from "../pages/Reservation";
import TermsAndConditions from "../components/TermsAndConditions";
import CourseDetails from './../pages/courses/CourseDetails';
import Teckits from "../pages/Teckits";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import EventFeed from "../pages/Events/EventFeed";
import CourseFeed from "../pages/courses/CourseFeed";
import ForgetPassword from "../pages/Auth/ForgetPassword";

export const router = createBrowserRouter([
    {path: '/', element: <App /> , children: [
        {path: '/' , index: true, element: <Home />},
        {path: '/courseDetails', element: <CourseDetails /> },
        {path: '/eventDetails/:id', element: <EventDetails /> },
        {path: '/reservation', element: <Reservation /> },
        {path: '/eventFeed', element: <EventFeed /> },
        {path: '/courseFeed', element: <CourseFeed /> },
        {path: '/terms', element: <TermsAndConditions /> },
        {path: '/tickets', element: <Teckits /> },
    ] },
    {path: '/login', element: <Login /> },
    {path: '/register', element: <Register /> },
    {path: '/forget', element: <ForgetPassword /> },
])