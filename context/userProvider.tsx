"use client";

"use client";
import { resolve } from "path";
import { createContext, useState } from "react";

export interface IUser {
  name: string;
  photo: string;
}

export interface UserType {
  user: IUser;
}

const defaultUser: IUser = {
  name: "Revalina",
  photo:
    "https://www.mncpictures.com/webcms/public/assets/images/videos/cast-1670215717.png",
};

export const UserContext = createContext<UserType>({
  user: defaultUser,
});

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUser, setCurrentUser] = useState<UserType>(defaultUser);
  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
}
