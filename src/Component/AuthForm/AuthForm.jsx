import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  registerUser,
  clearError,
} from "../../features/authSlice/authSlice";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "ADMIN",
  });

  const dispatch = useDispatch();
  const { isLoading, isError, token } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearError());

    if (isLogin) {
      dispatch(
        loginUser({
          username: formData.username,
          password: formData.password,
        }),
      );
    } else {
      //Auto-login flow
      const result = await dispatch(
        registerUser({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      );

      // Agar Register successful hua, to turant Auto-Login trigger karo
      if (registerUser.fulfilled.match(result)) {
        dispatch(
          loginUser({
            username: formData.username,
            password: formData.password,
          }),
        );
      }
    }
  };

  return (
    <div className="fixed z-50 bg-black/60 inset-0 flex justify-center items-center">
      <div className="max-w-md mx-auto p-6 shadow-md rounded-lg border bg-white">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          {isLogin ? "Login Account" : "Create New Account"}
        </h2>

        {isError && (
          <p className="p-3 mb-4 text-sm text-red-600 bg-red-100 rounded">
            {isError}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <input
            type="text"
            name="username"
            className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          {/* Email */}
          {!isLogin && (
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          )}

          {/* Password */}
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 bg-amber-500 text-black font-semibold rounded-md transition duration-200 ${
              isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-600"
            }`}
            disabled={isLoading}
          >
            {isLoading
              ? "Please wait..."
              : isLogin
                ? "Login"
                : "Create Account"}
          </button>
        </form>

        {/* Switch Mode Button */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">
            {isLogin ? "New to Amazon? " : "Already have an account? "}
          </span>
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              dispatch(clearError());
            }}
            className="text-amber-600 underline text-sm font-semibold ml-1"
          >
            {isLogin ? "Create your account" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
