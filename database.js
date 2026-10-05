/**
 * @returns {Promise<Array>}
 */
export const fetchStudents = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockData = [
        { 
          name: "Oya Pamukçuoğlu", 
          id: "S001", 
          grades: [{ courseId: "CS101", grade: 85 }, { courseId: "MATH101", grade: 90 }] 
        },
        { 
          name: "Ali Veli", 
          id: "S002", 
          grades: [{ courseId: "CS101", grade: 78 }, { courseId: "MATH101", grade: 82 }] 
        },
        { 
          name: "Ahmet Mehmet", 
          id: "S003", 
          grades: [{ courseId: "CS101", grade: 92 }, { courseId: "ENG101", grade: 88 }] 
        },
        { 
          name: "Efe Pehlivan", 
          id: "S004", 
          grades: [{ courseId: "MATH101", grade: 100 }, { courseId: "ENG101", grade: 100 }] 
        }
      ];
      resolve(mockData);
    }, 1000);
  });
};
