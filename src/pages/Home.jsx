import Hero from '../components/Hero'
import CTA from '../components/CTA'
import CourseList from '../pages/courses/CourseList'

const Home = () => {
  return (
    <>
      <Hero />
      <CTA  />
      <CourseList />
      <CTA/>
      <CourseList />
    </>
  )
}

export default Home