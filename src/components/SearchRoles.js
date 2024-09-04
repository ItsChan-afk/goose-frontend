import React , {useState} from "react";

const SearchRoles = () => {
  const [search , setSearch] = useState('')
  const [confirm , setConfirm ] = useState('')

  return (
    <>
      <div className="flex justify-center gap-1 m-10">
        <input
          className="border-2 border-gray-400 rounded-lg bg-gray-200 h-10 w-30 p-1 "
          placeholder=" Search Roles"
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
        />
        <button
          className="bg-orange-500 border-2 text-white rounded-lg border-orange-700 font-bold p-1 text-sm shadow-md 
        transition hover:scale-95 hover:bg-orange-700 hover:shadow-orange-400"
        onClick={() => {setConfirm(search)}}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchRoles;
