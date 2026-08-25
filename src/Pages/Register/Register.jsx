import React, { use, useState } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../../Context/AuthContext';
import Loader from '../Loader/Loader';

const Register = () => {
   const{ createUser, loginWithGoogle, updateUser, authLoading}=use(AuthContext);
const location=useLocation();
console.log(location)
const navigate=useNavigate();

   const[success, setSuccess]=useState(false);
   const[error, setError]=useState("");

  //  handle register
   const handleRegister=e=>{
    e.preventDefault();

    setSuccess(false);
    setError("");

    const name=e.target.name.value;
    const photo=e.target.photo.value;
    const email=e.target.email.value;
    const password=e.target.password.value;



    const passwordLength = /^.{8,}$/;
    const passwordCase = /^(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
    const specialChar = /[!@#$%^&*]/;

    if(!passwordLength.test(password)){
      setError("Password must be at least 8 characters long.");
      return;
    }
    else if(!passwordCase.test(password)){
      setError("Password must be at least 8 characters and contain at least one uppercase and one lowercase letter.");
      return;
    }
    else if(!specialChar.test(password)){
      setError("Password must contain at least one special character.");
      return;
    }
  

    createUser(email, password)
    .then(()=>{
        return updateUser(name, photo);
    })
    .then(()=>{
  
       setSuccess(true);
      navigate(location.state || "/", {replace: true})

    })
    .catch(error=>{
       if(error.code==="auth/email-already-in-use"){
        setError("An account already exists with this email.");
       }
       else if(error.code==="auth/invalid-email"){
        setError("Please enter a valid email address.")
       }
       else if(error.code==="auth/network-request-failed"){
        setError("Please check your internet connection.");
       }
       else{
        setError("Unable to create your account. Please try again.");
       }
    })
   }

  //  handle google login

  const handleGoogleLogin=()=>{
    loginWithGoogle()
    .then(()=>{
      setError("");
      navigate(location.state || '/',{replace:true})
    })
    .catch(()=>{
      setError("Unable to login with Google. Please try again.");
    })
  }
   
  // loading
  if(authLoading){
    return <Loader></Loader>
  }
  
  return (
    <div className="w-10/12 mx-auto my-30">
      <div className=" flex justify-center">
        <div className="card bg-base-100 w-4/12 border border-gray-300 rounded-lg">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <h1 className="text-3xl font-bold pb-4">Create an Account</h1>

                {/* name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="user name"
                  name="name" required
                />
                {/* photo URL */}
                <label className="label">URL</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="photo url"
                  name="photo"
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
                
              <div>
                {
                    success && (
                      <p className="text-green-500 text-xs  font-bold">Your account has been created successfully!</p>
                    )
                  }
                  {
                    error && (
                      <p className='text-red-500 text-xs  font-bold'>
                        {error}
                      </p>
                    )
                  }
              </div>
                
                <button className="btn btn-warning mt-4">Create Account</button>
              </fieldset>


              {/* go to login */}
              <div className="text-center pt-4">
                <p className="font-medium">
                 Already have an account?{" "}
                  <Link
                  state={location.state}
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
        <button onClick={handleGoogleLogin} className="btn btn-neutral btn-outline rounded-full w-90">
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