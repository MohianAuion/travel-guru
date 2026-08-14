import React, { use } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import AuthContext from "../../Context/AuthContext";

const Login = () => {

    const {userLogin}=use(AuthContext);

    const handleOnSubmit=e=>{
        e.preventDefault();

        const email=e.target.email.value;
        const password=e.target.password.value;
       

        userLogin(email, password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    
  return (
    <div className="w-10/12 mx-auto my-30">
      <div className=" flex justify-center">
        <div className="card bg-base-100 w-4/12 border border-gray-300 rounded-lg">
          <div className="card-body">
            <form onSubmit={handleOnSubmit}>
              <fieldset className="fieldset">
                <h1 className="text-3xl font-bold pb-4">Login</h1>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input w-full"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-warning mt-4">Login</button>
              </fieldset>

              {/* go to register */}
              <div className="text-center pt-4">
                <p className="font-medium">
                  Don't have any account?{" "}
                  <Link
                    to="/auth/register"
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
      <div className="flex justify-center">
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
