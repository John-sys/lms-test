import React from "react";
import Link from "next/link";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";

function Login() {
  return (
    <div className="w-full h-screen absolute ">
      {/* container */}
      <div className=" grid md:grid-cols-2 w-full h-full mx-auto container md:max-h-[500px] max-w-[900px] md:mt-[50px]">

        {/* col 1 */}
        <div className="md:rounded-l-xl border bg-center bg-cover custom-img "></div>

        {/* col 2 */}
        <div className="flex flex-col md:rounded-r-xl border bg-[#fff] md:w-4/5 gap-10">
          {/* title section */}
          <div className="text-center">
            <h1 className="text-3xl font-semibold py-4">Welcome!</h1>
            <p className="text-gray-500 w-3/4 mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              reprehenderit.
            </p>
          </div>

          {/* form section */}
          <form className="flex flex-col gap-5 items-center">
            <div className="flex border rounded-md relative w-[300px] ">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full py-1 px-4 border rounded-md bg-white focus:outline-none border-none"
              />
              <span className="icon flex items-center px-4 ">
                <HiAtSymbol size={18}/>
              </span>
            </div>
            <div className="flex border rounded-md relative w-[300px]">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full py-1 px-4 border rounded-md bg-white focus:outline-none border-none"
              />
              {/* <span className="icon flex items-center px-4">
                <HiFingerPrint size={20}/>
              </span> */}
            </div>

            {/* buttons */}
            <div className="w-[180px] rounded-md py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-center hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-700 hover:border-blue-500   ">
              <button type="submit" className="text-white w-full ">
                Login
              </button>
            </div>
          </form>

          {/* bottom section */}
          <p className="text-center text-gray-400">
            Don't have an account?
            <Link href="/">
              <a className="text-blue-700 hover:text-blue-500">Sign Up</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
