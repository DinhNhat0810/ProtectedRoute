import { createContext, useState } from "react";

type AppContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const inititalAppContext: AppContextType = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  setIsAuthenticated: () => null,
};

export const AppContext = createContext<AppContextType>(inititalAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    inititalAppContext.isAuthenticated
  );
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
