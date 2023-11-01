import React, { createContext, useState } from "react";
import { User } from "src/types";

interface UserContextType {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  isPreview: boolean;
  setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode?: boolean;
  renderAll: React.Dispatch<React.SetStateAction<number>>;
}

type UserContextProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isPreview, setIsPreview] = useState(false);
  const [, renderAll] = useState(0);

  return (
    <UserContext.Provider
      value={{ user, setUser, isPreview, setIsPreview, renderAll }}
    >
      {children}
    </UserContext.Provider>
  );
};
