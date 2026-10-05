export class Student {
  constructor(name, id) {
    this.name = name;
    
    Object.defineProperty(this, 'id', {
      value: id,
      writable: false,
      configurable: false,
      enumerable: true
    });
    
    this.grades = [];
  }
/**
 *   @param {string} courseId
*  @param {number} grade
*/
  addGrade(courseId, grade)
  {
    this.grades.push({ courseId, grade });
  }
/**
  * @returns {number}
*/
  calculateAverage()
  {
    if (this.grades.length === 0) return 0;
    
    const total = this.grades.reduce((sum, entry) => sum + entry.grade, 0);
    return total / this.grades.length;
}
}