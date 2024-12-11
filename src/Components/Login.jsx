import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = ({ setHomePage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ShowEye, setShoweye] = useState(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "username" && password === "password") {
      // navigate("/");

      alert("Login successful");
      // setHomePage(false);
      navigate("/Dashboard");
      //   console.log(isAuthentication, "after");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className=" text-black bg-gray-200  ">
      <form className="border flex flex-col  justify-center items-center h-[100vh] w-[100%] gap-4">
        <div className="">
          <p>username : username</p>
          <p>password : password</p>
        </div>
        <div
          className=" border-[4px] border-white flex flex-col p-10 gap-7 bg-white rounded-2xl "
          style={{ boxShadow: "#cff0ff 0px 10px 10px -5px" }}
        >
          <h1 className=" from-text text-center text-[30px] ">Log In</h1>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border w-[100%] h-[45px] min-w-[272px] p-2  rounded-3xl focus:outline-none focus:border-x-2 "
            style={{ boxShadow: "#cff0ff 0px 10px 10px -5px" }}
            placeholder="Username"
          />
          <input
            type={ShowEye ? "password" : "text"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border w-[100%] h-[45px] min-w-[272px] p-2  rounded-3xl focus:outline-none focus:border-x-2 "
            style={{ boxShadow: "#cff0ff 0px 10px 10px -5px" }}
            placeholder="Password"
          />
          <div
            className="relative top-[-16%] left-[84%]"
            onClick={() => setShoweye((prev) => !prev)}
          >
            {" "}
            {ShowEye ? <FaRegEyeSlash /> : <IoEyeOutline />}
          </div>
          <button type="button" onClick={handleLogin} className="login-button">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
