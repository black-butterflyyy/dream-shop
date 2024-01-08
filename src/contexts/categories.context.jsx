import { useState, useEffect, createContext } from 'react';
import { getCategoriesAndDocument } from '../utils/firebase/firebase.util';

export const CategoriesContext = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocument();
      setCategoriesMap(categoriesMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
