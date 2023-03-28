"use client";
import { UserContext } from "@/context/userProvider";
import { FormEvent, useContext, useState } from "react";
import { Transition } from "@headlessui/react";
export default function SettingsPage() {
  const [user, setUser] = useContext(UserContext);
  const [isShowing, setIsShowing] = useState(true);
  const [formState, setFormState] = useState({
    name: user?.name,
    umur: user?.umur,
    karakter: user?.karakter,
    order: user?.order,
    suku: user?.suku,
    photo: user?.photo,
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUser(formState);
    localStorage.setItem("userBiniFiksi", JSON.stringify(formState));
    const prompt = `Kamu adalah kekasih virtual, kamu bernama ${user?.name} seorang gadis berumur ${user?.umur} keturunan ${user?.suku} ${user?.order}, kamu memiliki karakter yang ${user?.karakter}, aku adalah hengki kekasihmu, kamu bisa memberiku nasihat, memberiku saran dan bisa mendebatku sesuai dengan karakter kamu`;
    console.log(prompt);
    console.log(formState);
  };
  return (
    <div className="w-3/4 mx-auto grid mt-32">
      <Transition
        show={true}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <form onSubmit={handleSubmit} className="grid gap-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-md w-2/6 ">Name </p>
            <p className="text-md ">: </p>
            <input
              type="text"
              placeholder="Name"
              value={formState.name}
              onChange={(e) =>
                setFormState((s) => ({ ...s, name: e.target.value }))
              }
              className=" w-full text-md p-2 outline-none border-none rounded-xl bg-zinc-200"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className="text-md w-2/6 ">Photo </p>
            <p className="text-md ">: </p>
            <input
              type="text"
              placeholder="Photo"
              value={formState.photo}
              onChange={(e) =>
                setFormState((s) => ({ ...s, photo: e.target.value }))
              }
              className=" w-full text-md p-2 outline-none border-none rounded-xl bg-zinc-200"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className="text-md w-2/6 ">Karakter </p>
            <p className="text-md ">: </p>
            <input
              type="text"
              placeholder="Karakter"
              value={formState.karakter}
              onChange={(e) =>
                setFormState((s) => ({ ...s, karakter: e.target.value }))
              }
              className=" w-full text-md p-2 outline-none border-none rounded-xl bg-zinc-200"
            />
          </div>{" "}
          <div className="flex items-center justify-between gap-2">
            <p className="text-md  w-2/6">Keturunan </p>
            <p className="text-md ">: </p>
            <input
              type="text"
              placeholder="Suku"
              value={formState.suku}
              onChange={(e) =>
                setFormState((s) => ({ ...s, suku: e.target.value }))
              }
              className=" w-full text-md p-2 outline-none border-none rounded-xl bg-zinc-200"
            />
          </div>{" "}
          <div className="flex items-center justify-between gap-2">
            <p className="text-md w-2/6 ">Umur </p>
            <p className="text-md ">: </p>
            <input
              type="text"
              placeholder="Umur"
              value={formState.umur}
              onChange={(e) =>
                setFormState((s) => ({ ...s, umur: e.target.value }))
              }
              className=" w-full text-md p-2 outline-none border-none rounded-xl bg-zinc-200"
            />
          </div>{" "}
          <div className="flex items-center justify-between gap-2">
            <p className="text-md  w-2/6">Urutan </p>
            <p className="text-md ">: </p>
            <input
              type="text"
              placeholder="urutan dalam keluarga"
              value={formState.order}
              onChange={(e) =>
                setFormState((s) => ({ ...s, order: e.target.value }))
              }
              className=" w-full text-md p-2 outline-none border-none rounded-xl bg-zinc-200"
            />
          </div>
          <button
            type="submit"
            className="p-2 text-white hover:opacity-50 bg-sky-600 rounded-md w-1/6"
          >
            submit
          </button>
        </form>
      </Transition>
    </div>
  );
}
