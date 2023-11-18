import { Pencil } from 'lucide-react';
const StudentList = ({ students }) => {
  console.log({ students });
  return (
    <ul className="flex flex-col md:flex-row items-center md:justify-start md:flex-wrap mx-auto md:mx-auto overflow-auto border-4">
      {students?.map((student) => {
        return (
          <li
            key={student._id}
            className="border-2 m-2 pt-4 p-2 basis-50 text-sm rounded-md"
          >
            <p className="flex flex-row justify-between gap-4 mb-2">
              <strong className="text-tertiary">student details</strong>
              <Pencil size={16} />
            </p>
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
