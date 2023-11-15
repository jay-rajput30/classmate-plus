import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [],
  error: null,
  status: 'idle',
};

export const addStudentAsync = createAsyncThunk(
  'students/addStudentAsync',
  async (newStudent) => {
    const response = await axios.post(
      'http://localhost:3002/student',
      newStudent,
    );
    return response.data;
  },
);
export const getAllStudents = createAsyncThunk(
  'students/getAllStudents',
  async () => {
    const response = await axios.get('http://localhost:3002/student');
    return response.data;
  },
);
export const updateStudent = createAsyncThunk(
  'students/updateStudents',
  async (updatedStudentData) => {
    const response = await axios.post(
      `http://localhost:3002/student/${updatedStudentData.studentId}`,
      updatedStudentData,
    );
    return response.data;
  },
);
export const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: {
    [addStudentAsync.pending]: (state) => state.status === 'loading',
    [addStudentAsync.fulfilled]: (state, action) => {
      state.status === 'success';
      state.students.push(action.payload);
    },
    [addStudentAsync.rejected]: (state, action) => {
      state.status === 'error';
      state.error = action.payload;
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
      const studentFound = state.students.findIndex(
        (student) => student._id === updatedStudent._id,
      );
      if (studentFound !== -1) {
        state.students[studentFound] = updatedStudent;
      }
      state.students = action.payload;
    },
    [updateStudent.rejected]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
  },
});

export const {} = studentSlice.actions;
export default studentSlice.reducer;
