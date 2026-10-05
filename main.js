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

    console.log(`\nSuccessfully loaded ${students.length} student records.\n`);

    console.log("--- Student Overview ---");
    students.forEach(student => 
    {
      console.log(`${student.name} [ID: ${student.id}] - Overall Average: ${student.calculateAverage().toFixed(2)}`);
    });

    console.log("\n--- Top Performing Students ---");
    const sortedStudents = sortStudentsByAverage(students);
    sortedStudents.forEach((student, index) => 
    {
      console.log(`${index + 1}. ${student.name} (${student.calculateAverage().toFixed(2)})`);
    });

    console.log("\n--- Course Analytics ---");
    const courses = ["CS101", "MATH101", "ENG101"];
    courses.forEach(course => 
    {
      const average = getCourseAverage(students, course);
      console.log(`Course ${course} Average: ${average.toFixed(2)}`);
    });

    console.log("\n--- Course Roster: CS101 ---");
    const cs101Roster = getStudentsByCourse(students, "CS101");
    cs101Roster.forEach(student => 
    {
      console.log(`- ${student.name}`);
    });

  } catch (error) {
    console.error("Failed to initialize course management system:", error);
  }
};

main();
