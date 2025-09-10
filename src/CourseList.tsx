import Course from './Course'
import { courseList } from './data/courseList'

export default function CourseList(
  { courses }: courseList
) {
  return (
    <>  
        {courses.map(course => (
            <Course
                name={course.name}
                courseId={course.courseId}
                studentPositions={course.studentPositions}
            />
        ))}
    </>
  )
}
