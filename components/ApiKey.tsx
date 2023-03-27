"use client";
import { useState } from "react";
import { X, Check } from "react-feather";
export default function ApiKey() {
  const [apiSettings, setApiSettings] = useState(true);
  return (
    <>
      {apiSettings ? (
        <div className="w-full items-center flex ">
          <input
            type="text"
            placeholder="Api Key"
            className="w-4/6 text-white border-b-2 border-sky-500 bg-transparent  outline-none"
          />
          <button className="hover:opacity-40">
            <Check />
          </button>
          <button
            onClick={() => setApiSettings(false)}
            className="hover:opacity-40"
          >
            <X />
          </button>
        </div>
      ) : (
        <button onClick={() => setApiSettings(true)}>Api Key</button>
      )}
    </>
  );
}
