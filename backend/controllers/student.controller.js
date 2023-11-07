import Student from "../models/student.model.js";

export const addNewStudent = async (studentData) => {
  try {
    const newStudent = new Student(studentData);
    const studentAdded = await newStudent.save();
    if (studentAdded) {
      return { success: true, data: studentAdded, error: null };
    } else {
      return {
        succesS: false,
        data: null,
        error: "unable to add new student",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const getAllStudents = async () => {
  try {
    const allStudents = await Student.find({});
    if (allStudents) {
      return { success: true, data: allStudents, error: null };
    } else {
      return {
        succesS: false,
        data: null,
        error: "unable to get all students",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const getStudentByName = async (studentName) => {
  try {
    const studentFound = await Student.find({ name: studentName });
    if (studentFound) {
      return { success: true, data: studentFound, error: null };
    } else {
      return {
        succesS: false,
        data: null,
        error: "unable to get single student",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const deleteSingleStudent = async (studentId) => {
  try {
    const studentDeleted = await Student.findOneAndDelete(
      { _id: studentId },
      { new: true }
    );
    if (studentDeleted) {
      return { success: true, data: studentDeleted, error: null };
    } else {
      return {
        succesS: false,
        data: null,
        error: "unable to delete single student",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const updateSingleStudent = async (studentId, studentData) => {
  try {
    const studentUpdated = await Student.findOneAndUpdate(
      { _id: studentId },
      studentData,
      { new: true }
    );
    if (studentUpdated) {
      return { success: true, data: studentUpdated, error: null };
    } else {
      return {
        succesS: false,
        data: null,
        error: "unable to update single student",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};
