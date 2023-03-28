"use client";
import { resolve } from "path";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface IUser {
  name?: string;
  umur?: string;
  karakter?: string;
  order?: string;
  suku?: string;
  photo?: string;
}

export const UserContext = createContext<
  [IUser | null, (user: IUser | null) => void]
>([
  {
    name: "Revalina",
    umur: "23",
    karakter: "penyabar, penyayang, sedikit keras kepala, agak pelit",
    order: "anak ke-4 dari 5 bersaudara",
    suku: "minang",
    photo:
      "https://www.mncpictures.com/webcms/public/assets/images/videos/cast-1670215717.png",
  },
  () => {},
]);

const defaultUser = {
  name: "Revalina",
  umur: "23",
  karakter: "penyabar, penyayang, sedikit keras kepala, agak pelit",
  order: "anak ke-4 dari 5 bersaudara",
  suku: "minang",
  photo:
    "https://www.mncpictures.com/webcms/public/assets/images/videos/cast-1670215717.png",
};

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = JSON.parse(localStorage.getItem("userBiniFiksi")) || defaultUser;
  const currentUser = useState(user as IUser | null);
  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
}
