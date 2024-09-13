import React from "react";


import { Link } from "react-router-dom";

const Sidenav = () => {


  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-3">
      <h1 className="text-2xl text-white font-bold">
        <i class="text-[#6556CD] ri-tv-2-fill mr-2"></i>
        <span className="text-2xl">SCSDB</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 gap-3"> 
        <h1 className="text-white font-semibold text-xl mt-8 mb-4 ml-2">
          New Feeds
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300">
        <i class="mr-1 ri-fire-fill"></i>
          Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300">
        <i class="mr-2 ri-bard-fill"></i>
          Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300">
        <i class="mr-2 ri-film-line"></i>
          Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300">
        <i class="mr-2 ri-tv-fill"></i>
          TV Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-3 duration-300">
        <i class="mr-2 ri-team-fill"></i>
          People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400 mt-4"/>
      <nav className="flex flex-col text-zinc-400 gap-3 ">
        <h1 className="text-white font-semibold text-xl mt-6 mb-1 ml-2">
          Website Info
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-2 duration-300">
        <i class="mr-2 ri-information-fill"></i>
          About SCSDB
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-2 duration-300">
        <i class="mr-2 ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
