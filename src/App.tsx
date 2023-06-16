import Header from "./components/Header/Header";
import { getMovies } from "./features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "./hooks/storeHook";
import { useEffect } from "react";

function App() {
  const { darkTheme } = useAppSelector((state) => state);

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMovies())
  }, [])
    
  return (
    <h2 className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-black dark:text-white min-h-screen px-4 lg:px-12 pb-20">
        <Header />
        <div>
          questo è il body della pagina 
        </div>
      </div>
    </h2>
  );
}

export default App;
