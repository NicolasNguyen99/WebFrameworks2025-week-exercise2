export default function Course(
    {name, courseId, studentPositions}: {
        name: string,
        courseId: string,
        studentPositions: number
    }
) {
  return (
    <div 
        className="course"
        style={{border: "1px solid gray", margin: "10px", padding: "10px", textAlign: "center"}}
    >
      <h2>{name}</h2>
      <p>{courseId}</p>
      <p>Student Positions: {studentPositions}</p>
    </div>
  )
}
