// Import necessary dependencies
import React from "react";
import leftImg from "../assets/signup-image.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  // Get navigation function for redirection
  const navigate = useNavigate();

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");
  const validatePasswordMatch = (value) => {
    return value === password || "Passwords don't match";
  };

  // Handle form submission
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    console.log(userInfo);

    try {
      // Send signup request to backend
      const response = await axios.post(
        "http://localhost:5002/user/signup",
        userInfo
      );

      if (response.data) {
        alert("Signup Successful! You can now log in!");

        // Redirect to login page
        navigate("/login");
      }
    } catch (error) {
      if (error.response) {
        alert("Error: " + error.response.data.error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FBF6E9]">
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row max-w-4xl px-4">
        {/* Left Section for SVG Illustration */}
        <div className="hidden md:flex flex-1 border-r justify-center items-center p-6 rounded-l-lg">
          <img src={leftImg} alt="Illustration" className="max-w-full h-auto" />
        </div>

        {/* Right Section for Form */}
        <div className="flex-1 p-8">
          <h2 className="text-3xl font-bold text-[#5DB996] mb-4 text-center">
            Create an Account
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name" className="block text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                {...register("name", { required: true })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-[#118B50]"
              />
              {errors.name && (
                <span className="text-red-500 text-[15px] flex justify-end mt-[2px]">
                  This field is required
                </span>
              )}
            </div>
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
                <span className="text-red-500 text-[15px] flex justify-end mt-[2px]">
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
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-gray-600 mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: true,
                  validate: validatePasswordMatch,
                })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-[#118B50]"
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-[15px] flex justify-end mt-[2px]">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#5DB996] text-white py-2 rounded-lg hover:bg-[#118B50] focus:outline-none focus:ring focus:ring-blue-300"
            >
              Sign Up
            </button>
          </form>
          <p className="text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
