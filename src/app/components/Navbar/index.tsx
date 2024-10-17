"use client";
import React, { useEffect, useState } from "react";

import data from "./data.json";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Link from "next/link";
import ButtonComp from "../ButtonComp";

function Navbar() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
const [isActivePage, setisActivePage]=useState<string>("");
  const mobileNavActiveToggler = () => {
    setIsMobileNavActive((prev: boolean) => !prev);
  };

  useEffect(()=>{
    setisActivePage(window.location.pathname);
  },[])



  return (
    <>
      <div className="w-full">
        <nav className="flex justify-between p-4 border-b-[1px] items-center">
          <div className="text-3xl font-extrabold bg-primary px-4 p-1 rounded">
            <h1>
              {" "}
              <Link href={data[0].link}>M_&_A</Link>
            </h1>
          </div>
          <div className=" hidden lg:block">
            <ul className="flex gap-5 capitalize ">
              {data.map((elm, ix) => (
                <li className={`${isActivePage === elm.link && 'font-bold'}`} key={ix}>
                  <Link href={elm.link}>{elm.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center items-center gap-5">
            <ButtonComp text="Contact us" type="button" varient="fill" />
            <div
              className=" lg:hidden block bg-slate-900 cursor-pointer text-primary p-2 rounded-lg"
              onClick={mobileNavActiveToggler}
            >
              <MenuOpenIcon />
            </div>
          </div>
          {/* //mobile menu */}
          <div 
          className={`fixed top-0 left-0 h-screen transition-all overflow-hidden duration-400 ease-in bg-[#00000082] 
                      ${isMobileNavActive ? 'w-[100%]' : 'w-[0%]'}`}><div className="w-[90%] bg-slate-950 h-screen text-primary p-10">
              <div className="w-full flex justify-end p-2">
                <ArrowBackIcon className="w-[90px] cursor-pointer "  onClick={mobileNavActiveToggler}/>
              </div>

              <ul className={`flex  flex-col gap-5 capitalize font-bold mt-10 text-2xl`}>
                {data.map((elm, ix) => (
                  <li className="w-max" key={ix}>
                    <Link href={elm.link}>{elm.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* <div className={`MobileNavbar ${isActivePage && 'transparentNav'}`} >
        <nav className='MobileNavbar_Wrapper'>
          <div className='MobileNavbar_Wrapper_logo'>
            <h1> <Link href={data[0].link}>PayWeb</Link></h1>
          </div>
          <div className='MobileNavbar_Wrapper_navContainer' onClick={mobileNavActiveToggler}>
            <MenuOpenIcon />
          </div>
        </nav> */}

      {/* mobile menu  */}
      {/* <div className={`mobileMenu_wrapper ${isMobileNavActive && 'mobileMenu_active'}`}>
          <nav className="mobileMenu_wrapper_nav">
            <div className="mobileMenu_wrapper_nav_header">
              <div className="mobileMenu_wrapper_nav_header_icon" onClick={mobileNavActiveToggler}>
                <ArrowBackIcon />
              </div>
            </div>

            <ul>
              {data.map((elm, index) => {
                return (
                  <li
                    key={index}
                  >
                 <Link href={elm.link}>{elm.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div> */}
      {/* </div> */}
    </>
  );
}

export default Navbar;
