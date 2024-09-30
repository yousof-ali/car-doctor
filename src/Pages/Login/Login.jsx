import React from "react";
import CommonButton from "../../Component/CommonButton";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import loginImg from "../../assets/images/login/login.svg"




const Login = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        const from = e.target 
        const email = from.email.value
        const password = from.password.value
        console.log(email,password)
    }
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="flex flex-col my-4 md:my-0 mx-2 items-center max-w-[1500px] gap-12 lg:flex-row">
        <div className=" flex-1  mx-auto">
          <img src={loginImg} alt="" />
        </div>
        <div className="card p-6 bg-base-100 flex-1 w-full max-w-sm rounded-md shrink-0 border">
          <form onSubmit={handleSubmit} >
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <CommonButton label={"login"}></CommonButton>
            </div>
          </form>
          <div className="divider ">Sign in with</div>
          <div className="flex justify-center gap-4 my-2">
            <div className="bg-base-200 p-2 rounded-full">
            <Link className="text-2xl bg-base-200"><FaFacebook />
            </Link>
            </div>
            <div className="bg-base-200 p-2 rounded-full">
            <Link className="text-2xl bg-base-200"><FaGoogle />

            </Link>
            </div>
            <div className="bg-base-200 p-2 rounded-full">
            <Link className="text-2xl bg-base-200"><FaLinkedinIn />

            </Link>
            </div>
          </div>
          <p>No Accouont ? <Link to={'/signUp'} className="btn btn-link text-[#FF3811]">Sign up</Link></p>

        </div>
      </div>
    </div>
  );
};

export default Login;
