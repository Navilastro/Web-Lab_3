export function calculateClassAverage(students, courseId) {
  let totalGrade = 0;
  let studentCount = 0;

  students.forEach(student => {
    const course = student.courses.find(c => c.courseId === courseId);
    if (course) {
      totalGrade += course.grade;
      studentCount++;
    }
  });

  return studentCount === 0 ? 0 : totalGrade / studentCount;
}

export function findTopStudent(students) {
  if (students.length === 0) return null;
  
  return students.reduce((top, current) => {
    return (current.getAverage() > top.getAverage()) ? current : top;
  });
}

export function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}
