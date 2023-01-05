import { createContext, useCallback, useContext, useState, useMemo } from 'react';
import { PT, EN } from '../../shared/langs';

interface ILangContextData {
  lang: 'PT'|'EN';
  getLang: () => any;
  setLang: (newLang: 'PT'|'EN') => void;
  toggleLang: () => void;
}

const LangContext = createContext({} as ILangContextData);

export const useLangContext = () => {
  return useContext(LangContext);
};

interface ILangProviderProps {
  children: React.ReactNode
}
export const LangProvider: React.FC<ILangProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<ILangContextData['lang']>('PT');

  const handleSetLang = useCallback((newLang: ILangContextData['lang']) => {
    setLang(newLang);
  }, []);

  const handleToggleLang = useCallback(() => {
    setLang(oldLang => oldLang === 'PT' ? 'EN' : 'PT');
  }, []);

  const handleGetLang = useMemo<any>(() => {
    switch(lang){
      case 'PT':
        return PT;
      case 'EN':
        return EN;
      default:
        return PT;
    }
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang: lang, getLang: handleGetLang, setLang: handleSetLang, toggleLang: handleToggleLang }}>
      {children}
    </LangContext.Provider>
  );
};