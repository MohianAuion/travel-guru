import React, { use, useRef, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../Context/AuthContext";
import Loader from "../Loader/Loader";
import { GoEye, GoEyeClosed } from "react-icons/go";

const Login = () => {
  const { userLogin, loginWithGoogle, resetPassword, authLoading } =
    use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then(() => {
        setSuccess(true);
        navigate(location.state || "/", { replace: true });
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          setError("Email or password is incorrect.");
        } else if (error.code === "auth/invalid-email") {
          setError("Please enter a valid email address.");
        } else if (error.code === "auth/wrong-password") {
          setError("Incorrect password.");
        } else if (error.code === "auth/user-disabled") {
          setError("This account has been disabled.");
        } else if (error.code === "auth/network-request-failed") {
          setError("Please check your internet connection.");
        } else if (error.code === "auth/user-token-expired") {
          setError("Your session has expired. Please log in again.");
        } else if (error.code === "auth/user-not-found") {
          setError("No account found with this email.");
        } else {
          setError("Something went wrong. Please try again.");
        }
      });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        setError("");
        alert(
          "Password reset email sent! Check your inbox to reset your password📧",
        );
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          setError("Please enter a valid email address.");
        } else if (error.code === "auth/user-not-found") {
          setError("No account found with this email.");
        } else if (error.code === "auth/network-request-failed") {
          setError("Please check your internet connection.");
        } else {
          setError("Something went wrong. Please try again.");
        }
      });
  };

  const handleGoogleLogIn = () => {
    loginWithGoogle()
      .then(() => {
        setError("");
        navigate(location.state || "/", { replace: true });
      })
      .catch(() => {
        setError("Unable to login with Google. Please try again.");
      });
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  if (authLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="w-11/12 sm:w-10/12 lg:w-8/12 xl:w-6/12 mx-auto my-12 sm:my-20 lg:my-30">
      <div className="flex justify-center">
        <div className="card bg-base-100 w-full max-w-md border border-gray-300 rounded-lg">
          <div className="card-body px-5 py-6 sm:px-8 sm:py-8">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <h1 className="text-2xl sm:text-3xl font-bold pb-4">Login</h1>
                <label className="label">Email</label>
                <input
                  type="email"
                  ref={emailRef}
                  className="input w-full"
                  placeholder="Email"
                  name="email"
                  required
                />
                <label className="label">Password</label>
                <div className="relative flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input w-full"
                    placeholder="Password"
                    name="password"
                  />
                  <button
                    type="btn"
                    onClick={handleShowPassword}
                    className="absolute top-3 right-4 text-lg"
                  >
                    {showPassword ? (
                      <GoEyeClosed></GoEyeClosed>
                    ) : (
                      <GoEye></GoEye>
                    )}
                  </button>
                </div>

                <div>
                  {error && (
                    <p className="text-red-500 text-xs font-bold">{error}</p>
                  )}
                  {success && (
                    <p className="text-green-500 text-xs font-bold">
                      you are successfully logged in!
                    </p>
                  )}
                </div>

                <div>
                  <button
                    onClick={handleForgotPassword}
                    type="button"
                    className="link link-hover"
                  >
                    Forgot password?
                  </button>
                </div>

                <button className="btn btn-warning mt-4 w-full">Login</button>
              </fieldset>

              <div className="text-center pt-4">
                <p className="font-medium text-sm sm:text-base">
                  Don't have any account?{" "}
                  <Link
                    to="/auth/register"
                    state={location.state}
                    className="text-yellow-500 font-bold"
                  >
                    Create an Account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="flex justify-center items-center gap-4 my-5 max-w-md mx-auto">
        <div className="h-px flex-1 bg-gray-400"></div>
        <span className="text-sm text-black">Or</span>
        <div className="h-px flex-1 bg-gray-400"></div>
      </div>

      {/* social logins */}
      <div className="flex flex-col items-center gap-3 max-w-md mx-auto">
        <button
          onClick={handleGoogleLogIn}
          className="btn btn-neutral btn-outline rounded-full w-full"
        >
          <FcGoogle className="text-xl"></FcGoogle> Continue with Google
        </button>

        <button className="btn btn-info btn-outline hover:text-white rounded-full w-full">
          <FaFacebook className="text-xl"></FaFacebook> Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
