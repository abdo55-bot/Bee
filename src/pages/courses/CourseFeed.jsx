import { Link } from "react-router-dom"
import Course from "./Course"
import { courseList } from "./script"

function CourseFeed() {
    return (
        <div className="single-course">
            <div className="container">
                <div className="search mt-2 mb-4">
                    <input type="text" placeholder="Search for community..." className="py-2 rounded px-2 text-black focus:outline-none bg-slate-200" />
                </div>
                <div className="row">
                    {courseList.map((course, index) => (

                        <div key={index} className="col-md-4 mb-2">
                            <Link to="/courseDetails">

                                <Course

                                    img={course.img}
                                    status={course.status}
                                    title={course.title}
                                    videos={course.video}
                                    time={course.time}
                                    description={course.description}
                                    presenter={course.presenter}
                                    rating={course.rating}
                                />
                            </Link>
                        </div>
                    ))}
                </div>

                <nav aria-label="Page navigation text-center">
                    <ul className="pagination flex mx-auto w-fit my-3 gap-3">
                        <li className="page-item"><a className="page-link page-link border border-gray-400 px-2 py-1 rounded-md" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link border border-gray-400 px-2 py-1 rounded-md bg-slate-700 text-gray-100 " href="#">1</a></li>
                        <li className="page-item"><a className="page-link border border-gray-400 px-2 py-1 rounded-md " href="#">2</a></li>
                        <li className="page-item"><a className="page-link border border-gray-400 px-2 py-1 rounded-md " href="#">3</a></li>
                        <li className="page-item"><a className="page-link border border-gray-400 px-2 py-1 rounded-md " href="#">Next</a></li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default CourseFeed