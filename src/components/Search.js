import React from "react";

const Search = ({search,setSearch, handleSearch}) => {
  return (
    <div className="w-full md:w-[70%] lg:w-[50%] px-3 p-5 flex justify-start items-center mx-auto">
      <input
        type="search" name='search' value={search} placeholder='Enter Search....'
        className="py-2 border-blue-500 border-2 px-2 w-full focus:outline-4 focus:outline-blue-900 placeholder:text-blue-400"
        onChange={(e)=>{setSearch(e.target.value)}}/>
      
    </div>
  );
};

export default Search;
 