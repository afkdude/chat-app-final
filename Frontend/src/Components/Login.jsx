// import React from "react";
import leftImg from "../assets/login.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Login() {
    const [authUser, setAuthUser] = useAuth();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    console.log(userInfo);

    axios
      .post("http://localhost:5002/user/login", userInfo)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          alert("Login Successful!");
          
        }
        localStorage.setItem("messenger", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.response) {
          alert("Error:" + error.response.data.message);
        }
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen  bg-[#FBF6E9]">
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row max-w-4xl  px-4 py-4">
        {/* Left Section for SVG Illustration */}
        <div className="hidden md:flex flex-1 border-r justify-center items-center p-6 rounded-l-lg">
          <img
            src={leftImg} // Replace this with the path to your SVG file
            alt="Illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Section for Form */}
        <div className="flex-1 p-8">
          <h2 className="text-3xl font-bold text-[#5DB996] mb-4 text-center">
            Login to your account
          </h2>
          <form
            className="space-y-4"
            action=""
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-[#118B50]"
              />
              {errors.email && (
                <span className="text-red-500  text-[15px] flex justify-end mt-[2px]">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-[#118B50]"
              />
              {errors.password && (
                <span className="text-red-500 flex text-[15px] justify-end mt-[2px]">
                  This field is required
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#5DB996] text-white py-2 rounded-lg hover:bg-[#118B50] focus:outline-none focus:ring focus:ring-blue-300"
            >
              Login
            </button>
          </form>
          <p className="text-gray-600 text-center mt-4">
            New here? create a new account!{" "}
            <Link to={"/signup"} className="text-blue-500 hover:underline">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
