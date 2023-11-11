import Class from "../models/class.model.js";

export const addNewClass = async (classData) => {
  try {
    const newClass = new Class(classData);

    const newClassCreated = await newClass.save();
    if (newClassCreated) {
      return { success: true, data: newClassCreated, error: null };
    } else {
      return { success: false, data: null, error: "unable to add new class" };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};
export const getClassDetails = async (classId) => {
  try {
    const classStudentsFound = await Class.find({ _id: classId }).populate(
      "students"
    );
    console.log({ classStudentsFound });

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
    const updatedClassWithNewStudent = await Class.findOneAndUpdate(
      { _id: classId },
      { $push: { students: studentId.studentId } },
      { new: true }
    );

    if (updatedClassWithNewStudent) {
      return { success: true, data: updatedClassWithNewStudent, error: null };
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
