import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const courses = [
  { name: "Course 1", courseId: "ABC123", studentPositions: 10 },
  { name: "Course 2", courseId: "XYZ456", studentPositions: 20 },
  { name: "Course 3", courseId: "DEF789", studentPositions: 30 },
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App courses={courses} />
  </StrictMode>,
)
