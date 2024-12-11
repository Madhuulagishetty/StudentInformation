import React, { useContext, useState } from "react";
import { GoX } from "react-icons/go";
import { ContextData } from "./ContextApi";

const StudentList = ({ HandleFormGo }) => {
  const Context = useContext(ContextData);

  const { addStudent } = Context;

  const [Name, setname] = useState("");
  const [id, setId] = useState("");
  const [dob, setdob] = useState("");
  const [photo, setPhoto] = useState("");
  const [Parents, setparents] = useState("");
  const [address, setaddress] = useState("");
  const [Enrolldate, setEnrolldate] = useState("");
  const [course, setcourse] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {
      Name,
      id,
      dob,
      photo,
      Parents,
      address,
      Enrolldate,
      course,
    };

    addStudent(studentData);
    HandleFormGo();

    setEnrolldate("");
    setId("");
    setPhoto("");
    setaddress("");
    setcourse("");
    setdob("");
    setname("");
    setparents("");
  };

  return (
    <div className="relative z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
        style={{ zIndex: 60 }}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl ">
          <p className="relative left-[95%] top-[20%] text-3xl text-black">
            <GoX onClick={HandleFormGo} className="cursor-pointer" />
          </p>
          <form onSubmit={handleSubmit} className="space-y-9 text-black">
            <h2 className="text-2xl font-bold text-center mb-4 text-black">
              Student Information Form
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={Name}
                  onChange={(e) => setname(e.target.value)}
                  placeholder="Enter the name"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label htmlFor="id" className="block text-gray-700 font-medium">
                  ID:
                </label>
                <input
                  type="number"
                  id="id"
                  name="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="Enter the ID"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label
                  htmlFor="photo"
                  className="block text-gray-700 font-medium"
                >
                  Photo:
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  accept="image/*"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-medium"
                >
                  Address:
                </label>
                <textarea
                  id="address"
                  name="address"
                  placeholder="Enter the address"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <label
                  htmlFor="dob"
                  className="block text-gray-700 font-medium"
                >
                  Date of Birth:
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={dob}
                  onChange={(e) => setdob(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label
                  htmlFor="guardian"
                  className="block text-gray-700 font-medium"
                >
                  Parent/Guardian Details:
                </label>
                <textarea
                  id="guardian"
                  name="guardian"
                  placeholder="Enter parent/guardian details"
                  required
                  value={Parents}
                  onChange={(e) => setparents(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <label
                  htmlFor="enrollmentDate"
                  className="block text-gray-700 font-medium"
                >
                  Enrollment Date:
                </label>
                <input
                  type="date"
                  id="enrollmentDate"
                  name="enrollmentDate"
                  required
                  value={Enrolldate}
                  onChange={(e) => setEnrolldate(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label
                  htmlFor="course"
                  className="block text-gray-700 font-medium"
                >
                  Course Details:
                </label>
                <textarea
                  id="course"
                  name="course"
                  placeholder="Enter course details"
                  required
                  value={course}
                  onChange={(e) => setcourse(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
