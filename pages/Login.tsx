import React from "react";
import Link from "next/link";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";

function Login() {
  return (
    <div className="w-full absolute h-screen ">
      {/* container */}
      <div className=" grid md:grid-cols-2 w-full border-0 md:rounded-xl h-full mx-auto container md:max-h-[500px] max-w-[800px] md:mt-[40px] shadow-lg">
        {/* col 1 */}
        <div className="md:rounded-l-xl border bg-center bg-cover custom-img "></div>

        {/* md:w-5/6 */}

        {/* col 2 */}
        <div className="flex flex-col md:rounded-r-xl border bg-[#fff] gap-10">
          {/* title section */}
          <div className="text-center">
            <h1 className="text-3xl font-semibold py-4">Welcome!</h1>
            <p className="text-gray-500 w-3/4 mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              reprehenderit.
            </p>
          </div>

          {/* form section */}
          <form className="flex flex-col gap-4 items-center">
            <div className="flex border rounded-md relative w-[300px] ">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full py-1 px-4 border rounded-md bg-white focus:outline-none border-none"
              />
              <span className="icon flex items-center px-4 ">
                <HiAtSymbol size={18} />
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

            {/* remember me and forgot password section */}
            <div className=" flex flex-row justify-between space-x-10 ">
              <div className="flex flex-row items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-0 focus:ring-0 focus:ring-offset-0 "
                />

                <p className="ml-1 text-gray-500">Remember me</p>
              </div>
              <div className="">
                <Link href="/">
                  <a className="text-blue-700 hover:text-blue-500">
                    Forgot passoword?
                  </a>
                </Link>
              </div>
            </div>

            {/* buttons */}
            <div className="w-[180px] rounded-md py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-center hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-700 hover:border-blue-500 mt-4  ">
              <button type="submit" className="text-white w-full ">
                Login
              </button>
            </div>
          </form>

          {/* bottom section */}
          <p className="text-center text-gray-500">
            Don't have an account yet?
            <Link href="/Register">
              <a className="text-blue-700 hover:text-blue-500 ml-2">Sign Up</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
