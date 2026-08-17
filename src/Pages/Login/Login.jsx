import React, { use, useRef, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../Context/AuthContext";
import Loader from "../Loader/Loader";

const Login = () => {
  const { userLogin, loginWithGoogle, resetPassword, authLoading } =
    use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const emailRef = useRef(null);

  // handleLogin
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

  // handle forgot password
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

  // handle google login

  const handleGoogleLogIn = () => {
    loginWithGoogle()
      .then(() => {
        setError("");
      })
      .catch(() => {
        setError("Unable to login with Google. Please try again.");
      });
  };

  //  loading
  if (authLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="w-10/12 mx-auto my-30">
      <div className=" flex justify-center">
        <div className="card bg-base-100 w-4/12 border border-gray-300 rounded-lg">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <h1 className="text-3xl font-bold pb-4">Login</h1>
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
                <input
                  type="password"
                  className="input w-full"
                  placeholder="Password"
                  name="password"
                />
                {/* error && success  */}
                <div>
                  {error && (
                    <p className="text-red-500 text-xs  font-bold ">{error}</p>
                  )}
                  {success && (
                    <p className="text-green-500 text-xs  font-bold">
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
                <button className="btn btn-warning mt-4">Login</button>
              </fieldset>

              {/* go to register */}
              <div className="text-center pt-4">
                <p className="font-medium">
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

      {/* orrrr */}
      <div className="flex justify-center items-center gap-4 my-5">
        <div className="h-px w-40 bg-gray-400"></div>

        <span className="text-sm text-black">Or</span>

        <div className="h-px w-40 bg-gray-400"></div>
      </div>

      {/* login with google */}
      <div onClick={handleGoogleLogIn} className="flex justify-center">
        <button className="btn btn-neutral btn-outline rounded-full w-90">
          <FcGoogle className="text-xl"></FcGoogle> Continue with Google
        </button>
      </div>

      {/* login with Facebook */}
      <div className="flex justify-center mt-3">
        <button className="btn btn-info btn-outline  hover:text-white rounded-full w-90">
          <FaFacebook className="text-xl"></FaFacebook> Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
