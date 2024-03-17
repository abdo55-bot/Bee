import Hero from '../components/Hero'
import CTA from '../components/CTA'
import EventList from '../pages/Events/EventList'
import CTA2 from '../components/CTA2'
import CourseList from '../pages/courses/CourseList'

const Home = () => {
  return (
    <>
      <Hero />
      <CTA  />
      <EventList />
      <CTA2 />
      <CourseList />
    </>
  )
}

export default Home