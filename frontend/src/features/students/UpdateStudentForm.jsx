import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { VALID_GRADES } from '../../utils/constants';
const UpdateStudentForm = ({ setShowUpdateStudent }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: {} });

  const studentFormSubmitHandler = (data) => {
    console.log({ data });
  };

  return (
    <form
      onSubmit={handleSubmit(studentFormSubmitHandler)}
      noValidate
      className="form-container absolute top-8 left-4 bg-background border-primary"
    >
      <h2>update student form</h2>
      <div className="form-item">
        <div className="flex justify-between">
          <label htmlFor="name" className="font-semibold">
            name
          </label>
          <input id="name" {...register('name')} className="border-2" />
        </div>
        <p className="text-rose-600 text-sm">{errors.name?.message}</p>
      </div>
      <div className="form-item">
        <div className="flex justify-between">
          <label htmlFor="age" className="font-semibold">
            age
          </label>
          <input
            id="age"
            {...register('age')}
            className="border-2"
            type="number"
          />
        </div>
        <p className="text-rose-600 text-sm">{errors.age?.message}</p>
      </div>
      <div className="form-item">
        <div className="flex justify-between">
          <label className="font-semibold" htmlFor="gender">
            gender
          </label>
          <select id="gender" {...register('gender')} className="border-2">
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <p className="text-rose-600 text-sm">{errors.age?.message}</p>
      </div>
      <div className="form-item">
        <div className="flex justify-between">
          <label className="font-semibold" htmlFor="grade">
            grade
          </label>
          <input
            id="grade"
            {...register('grade', {
              validate: {
                validGrade: (fieldValue) => {
                  return (
                    VALID_GRADES.includes(fieldValue) || 'enter valid grade'
                  );
                },
              },
            })}
            className="border-2"
          />
        </div>
        <p className="text-rose-600 text-sm">{errors.grade?.message}</p>
      </div>
      <div className="form-item">
        <div className="flex justify-between">
          <label className="font-semibold" htmlFor="attendance">
            attendance
          </label>
          <input
            type="number"
            id="attendance"
            {...register('attendance')}
            className="border-2"
          />
        </div>
        <p className="text-rose-600 text-sm">{errors.attendance?.message}</p>
      </div>
      <div className="form-item">
        <div className="flex justify-between">
          <label className="font-semibold" htmlFor="marks">
            marks
          </label>
          <input
            type="number"
            id="marks"
            {...register('marks')}
            className="border-2"
          />
        </div>
        <p className="text-rose-600 text-sm">{errors.marks?.message}</p>
      </div>
      <div className="flex flex-row  gap-8">
        <button className="bg-primary py-1 rounded-md flex-1">add</button>
        <button
          className="bg-slate-200 py-1 rounded-md border-2 flex-1"
          onClick={() => setShowUpdateStudent(false)}
        >
          cancel
        </button>
      </div>
      <DevTool control={control} placement="top-left" />
    </form>
  );
};

export default UpdateStudentForm;
