import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Every = () => {
  const [geese, setGeese] = useState([]);
  const [search, setSearch] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        // "http://localhost:4000/api/every"
        
        const ourdata = await axios.get("https://goose-backend-g6bw.vercel.app/api/every");
        setGeese(ourdata.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  function selected(slug) {
    console.log(slug);
    navigate(`/roles/${slug}`);
  }

  
  const filteredGeese = geese.filter(goose =>
    goose.name.toLowerCase().startsWith(confirm.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-center gap-1 m-10">
        <input
          className="border-2 border-gray-400 rounded-lg bg-gray-200 h-10 w-30 p-1"
          placeholder="Search Roles"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="bg-orange-500 border-2 text-white rounded-lg border-orange-700 font-bold p-1 text-sm shadow-md 
          transition hover:scale-95 hover:bg-orange-700 hover:shadow-orange-400"
          onClick={() => {
            setConfirm(search);
          }}
        >
          Search
        </button>
      </div>

      <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-[5rem] m-10">
        
        {filteredGeese.map((goose) => (
          <div
            key={goose.slug}
            className="col-span-1 border-2 border-biege-700 shadow-xl rounded-xl bg-white transition hover:shadow-orange-500 hover:shadow-lg hover:border-orange-500"
          >
            <img
              src={goose.image}
              alt={goose.name}
              className="w-full h-[8rem] object-contain mt-5 mb-10"
            />
            <div className="flex justify-between p-2 border-black border-t-2">
              <h1 className="text-lg font-bold self-center">{goose.name}</h1>
              <button
                onClick={() => {
                  selected(goose.slug);
                }}
                className="bg-orange-500 border-2 border-orange-800 rounded-md shadow-md transition hover:shadow-orange-400 hover:scale-105 hover:bg-orange-700 text-white p-2"
              >
                View More
              </button>
            </div>
            <p className="text-gray-500 text-md p-2">{goose.short}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Every;
