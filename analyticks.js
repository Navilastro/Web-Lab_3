/**
 * @param {Array} students
 * @param {string} courseId
 * @returns {Array}
 */
export const getStudentsByCourse = (students, courseId) =>
    {
  return students.filter(student => 
    student.grades.some(entry => entry.courseId === courseId)
  );
};

/**
 * @param {Array} students
 * @param {string} courseId
 * @returns {number}
 */
export const getCourseAverage = (students, courseId) =>{
  const enrolledStudents = getStudentsByCourse(students, courseId);
  
  if (enrolledStudents.length === 0) return 0;

  const totalGrades = enrolledStudents.reduce((sum, student) => {
    const courseEntry = student.grades.find(entry => entry.courseId === courseId);
    return sum + courseEntry.grade;
  }, 0);

  return totalGrades / enrolledStudents.length;
};

/**
 * @param {Array} students
 * @returns {Array}
 */
export const sortStudentsByAverage = (students) => 
{
  return [...students].sort((a, b) => b.calculateAverage() - a.calculateAverage());
};
