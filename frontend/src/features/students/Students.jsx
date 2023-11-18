import React, { useEffect, useState } from 'react';
import StudentForm from './StudentForm';
import { useDispatch, useSelector } from 'react-redux';
import StudentList from './StudentList';
import { getAllStudents } from './StudentsSlice';
import UpdateStudentForm from './UpdateStudentForm';

const Students = () => {
  const [showUpdateStudentForm, setShowUpdateStudentForm] = useState(false);
  const [updateStudentData, setUpdateStudentData] = useState({
    id: '',
    name: '',
    age: 18,
    gender: 'male',
    grade: 'b',
    attendance: 75,
    marks: 75,
  });
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);
  const students = useSelector((state) => state.students.students);

  useEffect(() => {
    dispatch(getAllStudents());
  }, [status, dispatch]);
  return (
    <div className="w-full relative h-screen">
      {showUpdateStudentForm ? (
        <StudentForm
          student={updateStudentData}
          setUpdateStudentData={setUpdateStudentData}
          showUpdateStudentForm={showUpdateStudentForm}
          setShowUpdateStudentForm={setShowUpdateStudentForm}
        />
      ) : (
        <StudentForm
          showUpdateStudentForm={showUpdateStudentForm}
          setShowUpdateStudentForm={setShowUpdateStudentForm}
        />
      )}
      <h2 className="mx-4">total students: {students.length}</h2>
      <StudentList
        students={students}
        setShowUpdateStudentForm={setShowUpdateStudentForm}
        setUpdateStudentData={setUpdateStudentData}
      />
    </div>
  );
};

export default Students;
