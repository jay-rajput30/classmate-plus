import { Pencil, Trash2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { deleteStudent } from './StudentsSlice';
const StudentList = ({
  students,
  setShowUpdateStudentForm,
  setUpdateStudentData,
}) => {
  const dispatch = useDispatch();
  const editBtnClickHandler = (student) => {
    setUpdateStudentData(student);
    setShowUpdateStudentForm(true);
  };

  const deleteBtnClickHandler = (student) => {
    dispatch(deleteStudent(student));
    // console.log({ student });
  };
  return (
    <ul className="flex flex-col md:flex-row items-center md:justify-start md:flex-wrap mx-auto md:mx-auto overflow-auto">
      {students?.map((student) => {
        return (
          <li
            key={student._id}
            className="border-2 border-text m-2 pt-4 p-2 w-3/4 md:basis-60 text-sm rounded-md shadow-md shadow-text"
          >
            <div className="flex flex-row justify-between gap-4 mb-2">
              <strong className="text-tertiary">student details</strong>
              <div className="flex gap-2">
                <Pencil
                  size={16}
                  fill="#fa5246"
                  color="#fa5246"
                  onClick={() => editBtnClickHandler(student)}
                />
                <Trash2
                  size={16}
                  fill="#fa5246"
                  color="#fa5246"
                  onClick={() => deleteBtnClickHandler(student)}
                />
              </div>
            </div>
            <p className="flex flex-row justify-between gap-4">
              <strong>name</strong>
              <span>{student.name}</span>
            </p>
            <p className="flex flex-row justify-between gap-4">
              <strong>age</strong>
              {student.age}
            </p>
            <p className="flex flex-row justify-between gap-4">
              <strong>gender</strong>
              {student.gender}
            </p>
            <p className="flex flex-row justify-between gap-4">
              <strong>grade</strong>
              {student.grade}
            </p>
            <p className="flex flex-row justify-between gap-4">
              <strong>attendance</strong>
              {student.attendance}
            </p>
            <p className="flex flex-row justify-between gap-4">
              <strong>marks</strong>
              {student.marks}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default StudentList;
