import React, { useContext, useState } from "react";
import login from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [error, setError] = useState();
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 z-0 backdrop-blur-md bg-white/40 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse z-0">
          <div className="lg:text-left">
            <h1 className="text-center text-5xl font-bold z-0">Login now!</h1>
            <div className="w-full flex justify-center">
              <img className="w-1/2 md:w-full lg:w-full" src={login} />
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl backdrop-blur-md bg-white/40 rounded-xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input bg-white  bg-white input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span>Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input bg-white  input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="text-xl btn border-2 border-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811] hover:border-2">
                  Login
                </button>
              </div>
              <p>
                Have an account?{" "}
                <Link to="/sign-up" className="text-[#FF3811] font-bold">
                  Sign Up
                </Link>
              </p>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
