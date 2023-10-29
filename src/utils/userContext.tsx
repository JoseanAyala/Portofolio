import React, { createContext, useState } from "react";
import { User } from "src/types";

interface UserContextType {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  isPreview: boolean;
  setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;
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
  return (
    <UserContext.Provider value={{ user, setUser, isPreview, setIsPreview }}>
      {children}
    </UserContext.Provider>
  );
};
