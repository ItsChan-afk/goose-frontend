import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Selected = () => {

  const { slug } = useParams();
  const [role, setRole] = useState({});
  const [color, setColor] = useState("red");

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(`http://localhost:4000/api/roles/${slug}`);
        setRole(res.data);
        if(role.color === 'goose'){
          setColor('green')
        }
        else{
          setColor('red')
        }
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [slug]);

  return (
    <div className="flex justify-center gap-[5rem] p-5 m-5 max-h-[30rem] border-2 rounded-md border-orange-500 shadow-md transition hover:shadow-lg hover:shadow-orange-500 ">
      <img
        src={role.image}
        alt={role.name}
        className="object-contain border-2 "
      />
      <div className="bg-biege-900 object-contain p-3 border-2">
        <h3 className="text-xl font-bold my-3">{role.name}</h3>
        <div className="underline w-full border-t-2 border-gray-500 "></div>
        <p className="text-md my-3">{role.short}</p>
        <p className="text-md my-3">{role.description}</p>
        <div className="flex flex-wrap mt-10">
          <p className="font-bold">Role: </p>
          <p className={`font-bold text-${color}-600 ml-2`}>{role.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Selected;
