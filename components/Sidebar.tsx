"use client";
import { IUser, UserContext } from "@/context/userProvider";
import { useContext } from "react";
import { Key, Settings } from "react-feather";
import ApiKey from "./ApiKey";

export default function Sidebar() {
  const user = useContext(UserContext);
  return (
    <div className="bg-sky-800 w-3/12 text-white">
      <div className="my-4 mx-auto w-full grid justify-center relative">
        <div className="flex relative">
          <img
            src={user.photo}
            alt="BINI FIKSINYA UCHAN"
            className="object-cover w-[200px] h-[200px] rounded-full"
          />
          <div className="w-6 h-6 rounded-full bg-emerald-400 top-8 absolute right-2 z-40"></div>
        </div>

        <div className="text-3xl font-extralight text-center">{user.name}</div>
        <div className="text-sm font-extralight text-center">status 🎃</div>
      </div>
      <ul className=" absolute bottom-10  grid w-64 ml-4 ">
        <li className="flex p-4 gap-2 items-center hover:bg-sky-700 hover:bg-sky-700 hover:p-4 hover:rounded-xl cursor-pointer">
          <Settings size={19} />
          Settings
        </li>
        <li className="flex p-4 gap-2 items-center hover:bg-sky-700 hover:p-4 hover:rounded-xl cursor-pointer">
          <Key size={19} />
          <ApiKey />
        </li>
      </ul>
    </div>
  );
}
