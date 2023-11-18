import React, { useEffect } from 'react';
import StudentForm from './StudentForm';
import { useDispatch, useSelector } from 'react-redux';
import StudentList from './StudentList';
import { getAllStudents } from './StudentsSlice';

const Students = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);
  const students = useSelector((state) => state.students.students);

  console.log({ studentsInMain: students });
  useEffect(() => {
    dispatch(getAllStudents());
  }, [status, dispatch]);
  return (
    <div className="w-full">
      <StudentForm />
      <h2 className="mx-4">total students: {students.length}</h2>
      <StudentList students={students} />
    </div>
  );
};

export default Students;
