import { configureStore } from '@reduxjs/toolkit';
import { studentSlice } from '../features/students/StudentsSlice';

const store = configureStore({
  reducer: { students: studentSlice.reducer },
});

export default store;
