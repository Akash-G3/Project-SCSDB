import React, { useState } from 'react'
import { useEffect } from "react";
import axios from "../../utils/axios"
import { Link } from 'react-router-dom'
import noimage from "/public/noimage.png"

const Topnav = () => {

  const [query, setquery] = useState("");
  const [searches, setSearches] = useState([]);

  const GetSearches = async () => {
    try {
      const {data} = await axios.get(`/search/multi?query=${query}`)
     
      setSearches(data.results)
    } catch (error) {
      console.log("Error:", error);
    }
  }
  useEffect( () => {
    GetSearches ();
  }, [query]);


  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center pl-[15%]'>
       <i class="text-zinc-400 text-3xl ri-search-line"></i>
       <input 
       onChange={(e)=> setquery(e.target.value)}
       value={query}
       className='w-[60%] mx-4 p-5 text-xl text-zinc-200 outline-none border-none bg-transparent' type="text" placeholder='Search here'/>

       {query.length > 0 && <i onClick={() => setquery("")} class="text-zinc-400 text-3xl ri-close-line"></i>}
       

       <div className='w-[60%] max-h-[55vh] bg-zinc-200 top-[100%] absolute overflow-auto'>

        {searches.map((s, i) => (
          <Link key={i} className='hover:text-zinc-900 hover:bg-zinc-300 duration-200 font-semibold text-zinc-600 w-[100%] p-8 flex justify-start items-center border-b-2 border-zinc-100'>
        <img className='w-[12vh] h-[12vh] object-cover rounded mr-5 shadow-xl' 
        src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage
         } alt="" />
        <span>{s.name || s.title || s.original_name || s.original_title}</span>
        </Link>
      ))}
       
       </div>
    </div>
  )
}

export default Topnav