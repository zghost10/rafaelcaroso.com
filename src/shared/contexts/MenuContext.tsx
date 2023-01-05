import { useEffect } from 'react'
import { createContext, useCallback, useContext, useState } from 'react';

interface IMenuOption {
  icon: string;
  path: string;
  label: string;
}

interface IMenuContextData {
  menuOptions: IMenuOption[];
  setMenuOptions: (newMenuOptions: IMenuOption[]) => void;
}

const MenuContext = createContext({} as IMenuContextData);

export const useMenuContext = () => {
  return useContext(MenuContext);
};

interface IMenuProviderProps {
  children: React.ReactNode
}
export const MenuProvider: React.FC<IMenuProviderProps> = ({ children }) => {
  const [menuOptions, setMenuOptions] = useState<IMenuOption[]>([]);

  const handleSetMenuOptions = useCallback((newMenuOptions: IMenuOption[]) => {
    setMenuOptions(newMenuOptions);
  }, []);

  return (
    <MenuContext.Provider value={{ menuOptions, setMenuOptions: handleSetMenuOptions }}>
      {children}
    </MenuContext.Provider>
  );
};