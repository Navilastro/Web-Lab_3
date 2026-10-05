import { Student } from './models.js';
import { fetchStudents } from './database.js';
import { getStudentsByCourse, getCourseAverage, sortStudentsByAverage } from './logic.js';

const main = async () => 
    {
  try
  {
    console.log("Fetching student records from database...");
    const rawStudentData = await fetchStudents();
    
    const students = rawStudentData.map(data => 
    {
      const student = new Student(data.name, data.id);

      try 
      {
        student.id = "HACKED_ID";
      } catch (e) 
      {
        console.error("Error occurred while trying to modify student ID:", e);
      }
      data.grades.forEach(entry => student.addGrade(entry.courseId, entry.grade));
      
      return student;
    });