import Hero from '../components/Hero'
import CTA from '../components/CTA'
import EventList from '../pages/Events/EventList'
import CourseList from '../pages/courses/CourseList'

const Home = () => {
  return (
    <>
      <Hero />
      <CTA  />
      <EventList />
      <CTA/>
      <CourseList />
    </>
  )
}

export default Home