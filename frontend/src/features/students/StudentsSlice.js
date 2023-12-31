import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  students: [],
  error: null,
  status: 'idle',
};

export const addStudentAsync = createAsyncThunk(
  'students/addStudentAsync',
  async (newStudent) => {
    console.log('add student function called');
    const response = await axios.post(
      'http://localhost:3002/student',
      newStudent,
    );

    return response.data.data;
  },
);
export const getAllStudents = createAsyncThunk(
  'students/getAllStudents',
  async () => {
    const response = await axios.get('http://localhost:3002/student');
    return response.data.data;
  },
);
export const updateStudent = createAsyncThunk(
  'students/updateStudent',
  async (updatedStudentData) => {
    const response = await axios.post(
      `http://localhost:3002/student/${updatedStudentData._id}`,
      updatedStudentData,
    );
    console.log({ updateStudentRes: response.data });
    return response.data.data;
  },
);

export const deleteStudent = createAsyncThunk(
  'students/updateStudents',
  async (updatedStudentData) => {
    const response = await axios.delete(
      `http://localhost:3002/student/${updatedStudentData._id}`,
    );
    return response.data.data;
  },
);
export const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: {
    [addStudentAsync.pending]: (state) => {
      state.status = 'loading';
    },
    [addStudentAsync.fulfilled]: (state, action) => {
      state.status = 'success';
      state.students = [...state.students, action.payload];
    },
    [addStudentAsync.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.error.message;
    },
    [getAllStudents.pending]: (state) => {
      state.status = 'loading';
    },
    [getAllStudents.fulfilled]: (state, action) => {
      state.status = 'success';
      state.students = action.payload;
    },
    [getAllStudents.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
    [updateStudent.pending]: (state) => {
      state.status = 'loading';
    },
    [updateStudent.fulfilled]: (state, action) => {
      state.status = 'success';
      const updatedStudent = action.payload;
      console.log({ state, updatedStudent });
      const studentFound = state.students.findIndex(
        (student) => student._id === updatedStudent._id,
      );
      if (studentFound !== -1) {
        state.students = state.students.map((student) =>
          student._id === updatedStudent._id ? updatedStudent : student,
        );
      }
    },
    [updateStudent.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
    [deleteStudent.pending]: (state) => {
      state.status = 'loading';
    },
    [deleteStudent.fulfilled]: (state, action) => {
      state.status = 'success';
      console.log({ d: action.payload });
      state.students = state.students.filter(
        (student) => student._id !== action.payload._id,
      );
    },
    [deleteStudent.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
  },
});

export const {} = studentSlice.actions;
export default studentSlice.reducer;
