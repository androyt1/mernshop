import React from "react";

const Search = ({search,setSearch, category,setCategory}) => {
  return (
    <div className="w-full   px-3 p-5 flex justify-start items-center mx-auto">
      <input
        type="search" name='search' value={search} placeholder='Enter Search....'
        className="py-2 border-blue-500 border-2 px-2  focus:outline-4 focus:outline-blue-900 placeholder:text-blue-400 w-[50%]"
        onChange={(e)=>{setSearch(e.target.value)}}/>
      
        <select name="category" id="" value={category} className="py-2 border-blue-500 border-2 px-2  focus:outline-4 focus:outline-blue-900 placeholder:text-blue-900 w-[50%]" onChange={(e)=>setCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="clothes">Clothes</option>
            <option value="electronics">Electronics</option>
            <option value="food">Foods</option>
        </select>
    </div>
  );
};

export default Search;
 