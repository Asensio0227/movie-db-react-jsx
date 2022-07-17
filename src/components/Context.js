import { useState, useContext, createContext} from 'react';
import useFetch from './useFetch';

export const API_END_POINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('batman');
  const { loading, error, data: movie } = useFetch(`&S=${query}`);
  return (
    <AppContext.Provider value={{
      query,
      loading,
      error,
      movie,
      setQuery,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };