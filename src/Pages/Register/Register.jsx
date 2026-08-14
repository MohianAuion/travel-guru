import React, { use } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import AuthContext from '../../Context/AuthContext';

const Register = () => {
   const{ createUser}=use(AuthContext);

   const handleRegister=e=>{
    e.preventDefault();

    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email, password)

    createUser(email, password)
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
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <h1 className="text-3xl font-bold pb-4">Create an Account</h1>

                {/* first name */}
                <label className="label">First Name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="firstName"
                  name="firstName" required
                />
                {/* last name */}
                <label className="label">Last Name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="lastName"
                  name="lastName" required
                />
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="your email"
                  name="email" required
                />
                {/* password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input w-full"
                  placeholder="enter a password"
                  name="password" required
                />
                {/* confirm password */}
                <label className="label">Confirm Password</label>
                <input
                  type="password"
                  className="input w-full"
                  placeholder="confirm your password"
                  name="confirmPassword" required
                />
                
                <button className="btn btn-warning mt-4">Create Account</button>
              </fieldset>

              {/* go to register */}
              <div className="text-center pt-4">
                <p className="font-medium">
                 Already have an account?{" "}
                  <Link
                    to="/auth"
                    className="text-yellow-500 font-bold"
                  >
                   Please LogIn
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

export default Register;