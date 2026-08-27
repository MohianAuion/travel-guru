import React, { use, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../Context/AuthContext";
import Loader from "../Loader/Loader";

const Register = () => {
  const { createUser, loginWithGoogle, updateUser, authLoading } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccess(false);
    setError("");

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const passwordLength = /^.{8,}$/;
    const passwordCase = /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
    const specialChar = /[!@#$%^&*]/;

    if (!passwordLength.test(password)) {
      setError("Password must be at least 8 characters long.");
      return;
    } else if (!passwordCase.test(password)) {
      setError("Password must be at least 8 characters and contain at least one uppercase and one lowercase letter.");
      return;
    } else if (!specialChar.test(password)) {
      setError("Password must contain at least one special character.");
      return;
    }

    createUser(email, password)
      .then(() => {
        return updateUser(name, photo);
      })
      .then(() => {
        setSuccess(true);
        navigate(location.state || "/", { replace: true });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("An account already exists with this email.");
        } else if (error.code === "auth/invalid-email") {
          setError("Please enter a valid email address.");
        } else if (error.code === "auth/network-request-failed") {
          setError("Please check your internet connection.");
        } else {
          setError("Unable to create your account. Please try again.");
        }
      });
  };

  const handleGoogleLogin = () => {
    setError("");
    loginWithGoogle()
      .then(() => {
        navigate(location.state || "/", { replace: true });
      })
      .catch(() => {
        setError("Unable to login with Google. Please try again.");
      });
  };

  if (authLoading) {
    return <Loader />;
  }

  return (
    <div className="w-11/12 sm:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto my-12 sm:my-20 lg:my-30">
      <div className="flex justify-center">
        <div className="card bg-base-100 w-full max-w-md border border-gray-300 rounded-lg">
          <div className="card-body px-5 py-6 sm:px-8 sm:py-8">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <h1 className="text-2xl sm:text-3xl font-bold pb-4">Create an Account</h1>

                {/* Name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="User name"
                  name="name"
                  required
                />

                {/* Photo URL */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Photo URL"
                  name="photo"
                />

                {/* Email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Your email"
                  name="email"
                  required
                />

                {/* Password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input w-full"
                  placeholder="Enter a password"
                  name="password"
                  required
                />

                {/* Confirm Password */}
                <label className="label">Confirm Password</label>
                <input
                  type="password"
                  className="input w-full"
                  placeholder="Confirm your password"
                  name="confirmPassword"
                  required
                />

                <div className="mt-2">
                  {success && (
                    <p className="text-green-500 text-xs font-bold">
                      Your account has been created successfully!
                    </p>
                  )}
                  {error && (
                    <p className="text-red-500 text-xs font-bold">{error}</p>
                  )}
                </div>

                <button className="btn btn-warning mt-4 w-full">Create Account</button>
              </fieldset>

              {/* Go to login */}
              <div className="text-center pt-4">
                <p className="font-medium text-sm sm:text-base">
                  Already have an account?{" "}
                  <Link
                    state={location.state}
                    to="/auth"
                    className="text-yellow-500 font-bold"
                  >
                    Please Log In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-center items-center gap-4 my-5 max-w-md mx-auto">
        <div className="h-px flex-1 bg-gray-400"></div>
        <span className="text-sm text-black">Or</span>
        <div className="h-px flex-1 bg-gray-400"></div>
      </div>

      {/* Social Logins */}
      <div className="flex flex-col items-center gap-3 max-w-md mx-auto">
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="btn btn-neutral btn-outline rounded-full w-full"
        >
          <FcGoogle className="text-xl" /> Continue with Google
        </button>

        <button
          type="button"
          className="btn btn-info btn-outline hover:text-white rounded-full w-full"
        >
          <FaFacebook className="text-xl" /> Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default Register;