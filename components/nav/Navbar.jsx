import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full top-0 left-0 bg-white ">
      <div className="md:flex items-center justify-between  py-4 md:px-10 px-7  ">
        <div className="font-bold text-xl cursor-pointer flex items-center font-serif ">
          KAAF
          <span className="text-[#E8AB5C] ml-2">UNIVERSITY</span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        {/* links */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-2 absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-2 pr-2 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } opacity-100 md:opacity-100 `}
        >
          <li className="md:ml-8 md:my-0 my-7 cursor-pointer hover:bg-[#E8AB5C] text-black hover:text-white duration-300 rounded-md px-2 py-2">
          <Link href="/">Home</Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 cursor-pointer hover:bg-[#E8AB5C] text-black hover:text-white duration-300 rounded-md px-2 py-2">
            Academics
          </li>
          <li className="md:ml-8 md:my-0 my-7 cursor-pointer hover:bg-[#E8AB5C] text-black hover:text-white duration-300 rounded-md px-2 py-2">
            Admission
          </li>
          <li className="md:ml-8 md:my-0 my-7 cursor-pointer hover:bg-[#E8AB5C] text-black hover:text-white duration-300 rounded-md px-2 py-2">
            Support
          </li>
          <li className="md:ml-8 md:my-0 my-7 cursor-pointer bg-[#E8AB5C] hover:text-black text-white duration-300 rounded-md px-2 py-2">
            <Link href="/Login">Log in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
