import React, { useContext, useState } from "react";
import { ContextData } from "./ContextApi";
import { AiFillDelete } from "react-icons/ai";
import RemoveOverlay from "./RemoveOverlay";

const StudentList = () => {
  const { students, deleteStudent } = useContext(ContextData);
  const [overlay, setOverlay] = useState(false);
  const [remove, setRemove] = useState();

  //   const FilterItems = students.filter((item) =>
  //     item.title.toUpperCase().includes(search.toUpperCase())
  //   );
  const Remove = (id) => {
    setRemove(id);
    setOverlay(true);
  };

  const confirmRemove = () => {
    deleteStudent(remove);
    // notify();
    setOverlay(false);
  };

  const cancelRemove = () => {
    setOverlay(false);
  };

  return (
    <div className="TableContainer p-6 bg-slate-100">
      <h2 className="text-2xl font-bold text-center mb-4">Student List</h2>
      <table className="TableContainer min-w-full table-auto bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left border-b border-gray-300">ID</th>
            <th className="px-4 py-2 text-left border-b border-gray-300">
              Name
            </th>
            <th className="px-4 py-2 text-left border-b border-gray-300">
              Course
            </th>
            <th className="px-4 py-2 text-left border-b border-gray-300">
              DOB
            </th>
            <th className="px-4 py-2 text-left border-b border-gray-300">
              Parents Guardian Details
            </th>
            <th className="px-4 py-2 text-left border-b border-gray-300">
              Adress
            </th>
            <th className="px-4 py-2 text-left border-b border-gray-300">
              Enrollment Date
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b hover:bg-gray-100">
              <td className="px-4 py-2 border-t border-gray-300">
                {student.id}
              </td>
              <td className="px-4 py-2 border-t border-gray-300">
                {student.Name}
              </td>
              <td className="px-4 py-2 border-t border-gray-300">
                {student.course}
              </td>
              <td className="px-4 py-2 border-t border-gray-300">
                {student.dob}
              </td>
              <td className="px-4 py-2 border-t border-gray-300">
                {student.Parents}
              </td>
              <td className="px-4 py-2 border-t border-gray-300">
                {student.address}
              </td>
              <td className="px-4 py-2 border-t border-gray-300">
                {student.Enrolldate}
              </td>
              <td className="px-4 py-2 border-t border-gray-300">
                <div
                  onClick={() => Remove(student.id)}
                  className="text-red-500 hover:text-red-700 text-2xl"
                >
                  <AiFillDelete />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {overlay && <RemoveOverlay confirmRemove={confirmRemove}  cancelRemove={cancelRemove}/>}
    </div>
  );
};

export default StudentList;
