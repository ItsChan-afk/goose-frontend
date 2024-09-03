import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Geese = () => {
  const [geese, setGeese] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const ourdata = await axios.get("http://localhost:4000/api/every");
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

  return (
    <>
      <div className="grid grid-cols-4 gap-[5rem] m-10">
        {geese.map((goose) => (
          <div
            key={goose.slug}
            className="col-span-1 border-2 border-biege-700 shadow-xl rounded-xl bg-white transition hover:shadow-orange-500 hover:shadow-lg hover:border-orange-500"
          >
            <img
              src={goose.image}
              alt={goose.name}
              className="w-full h-[8rem] object-contain mt-5 mb-10 "
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
            <p className="text-gray-500 text-md p-2 ">{goose.short}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Geese;
