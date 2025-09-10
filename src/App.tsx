import './App.css'
import CourseList from './CourseList'
import { courseList } from './data/courseList';

function App(
  { courses }: courseList
) {
  return (
    <>
      <CourseList courses={courses} />
    </>
  )
}

export default App