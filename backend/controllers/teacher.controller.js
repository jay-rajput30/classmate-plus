import Teacher from "../models/teacher.module.js";

export const addNewTeacher = async (teacherData) => {
  try {
    const newTeacher = new Teacher(teacherData);
    const teacherAdded = await newTeacher.save();
    if (teacherAdded) {
      return { success: true, data: teacherAdded, error: null };
    } else {
      return {
        succesS: false,
        data: null,
        error: "unable to add new teacher",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const getAllTeacher = async () => {
  try {
    const allTeacher = await Teacher.find({});
    if (allTeacher) {
      return { success: true, data: allTeacher, error: null };
    } else {
      return {
        succesS: false,
        data: null,
        error: "unable to get all teacher",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const getTeacherByName = async (teacherName) => {
  try {
    const teacherFound = await Teacher.find({ name: teacherName });
    if (teacherFound) {
      return { success: true, data: teacherFound, error: null };
    } else {
      return {
        succesS: false,
        data: null,
        error: "unable to get single teacher",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const deleteSingleTeacher = async (teacherId) => {
  try {
    const teacherDeleted = await Teacher.findOneAndDelete(
      { _id: teacherId },
      { new: true }
    );
    if (teacherDeleted) {
      return { success: true, data: teacherDeleted, error: null };
    } else {
      return {
        succesS: false,
        data: null,
        error: "unable to delete single teacher",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};

export const updateSingleTeacher = async (teacherData) => {
  try {
    const teacherUpdated = await Teacher.findOneAndUpdate(
      { _id: teacherData._id },
      teacherData,
      { new: true }
    );
    if (teacherUpdated) {
      return { success: true, data: teacherUpdated, error: null };
    } else {
      return {
        succesS: false,
        data: null,
        error: "unable to update single teacher",
      };
    }
  } catch (e) {
    return { success: false, data: null, error: e.message };
  }
};
