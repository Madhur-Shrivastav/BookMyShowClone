import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-grey-400 text-xs flex items-center cursor-pointer hover:white">
            Dehradun
          </span>
        </div>
        <div>
          <h3>Use App</h3>
        </div>
      </div>
    </>
  );
}
function NavMd() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-grey-400 text-xs flex items-center cursor-pointer hover:white">
            Dehradun
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full"></BiSearch>
        </div>
      </div>
    </>
  );
}
function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img
              src="https://pbs.twimg.com/profile_images/1093350814926528512/kicB0HRj_400x400.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch></BiSearch>
            <input
              type="text"
              placeholder="Search for movies, events, plays, sports and activities"
              className="w-full bg-transparent border-none focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-grey-200 text-base flex items-center cursor-pointer hover:text-white">
            Dehradun <BiSearch></BiSearch>
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-black">
            <BiMenu className="w-full h-full"></BiMenu>
          </div>
        </div>
      </div>
    </>
  );
}
const Navbar = () => {
  return (
    <>
      <nav className="bg-darkBackground-700 px-4 py-3">
        <div className="md:hidden">
          <NavSm></NavSm>
        </div>
        <div className="hidden md:flex lg:hidden">
          <NavMd></NavMd>
        </div>
        <div className="hidden md:hidden lg:flex">
          <NavLg></NavLg>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
