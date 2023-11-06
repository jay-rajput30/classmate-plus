import Class from "../models/class.model";

export const getAllStudents = async (classId) => {
  try {
    const classStudentsFound = await Class.find({ _id: classId })
      .populate("student")
      .exec();
    if (classStudentsFound) {
      return {
        success: true,
        data: classStudentsFound,
        error: null,
      };
    } else {
      return {
        success: false,
        data: null,
        error: "unable to get all students from class",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const addStudentToClass = async (classId, studentId) => {
  try {
    const classFound = await Class.find({ _id: classId });
    classFound.students = [...classFound.students, studentId];
    const studentsUpdated = await classFound.save();
    if (studentsUpdated) {
      return { success: true, data: studentsUpdated, error: null };
    } else {
      return {
        success: false,
        data: null,
        error: "unable to add new student to class",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const removeStudentFromClass = async (classId, studentId) => {
  try {
    const classFound = await Class.find({ _id: classId });
    classFound.students = classFound.students.filter(
      (student) => student !== studentId
    );
    const studentsUpdated = await classFound.save();
    if (studentsUpdated) {
      return { success: true, data: studentsUpdated, error: null };
    } else {
      return {
        success: false,
        data: null,
        error: "unable to remove student from class",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};
