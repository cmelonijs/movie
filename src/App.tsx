import Header from "./components/Header/Header";
import MovieCard from "./components/MovieCard/MovieCard";
import { getMovies } from "./features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "./hooks/storeHook";
import { useEffect } from "react";

function App() {
  const { darkTheme, movies } = useAppSelector((state) => state);

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])
    

  console.log('movies', movies)
  return (
    <h2 className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-800 dark:text-white min-h-screen px-4 lg:px-12 pb-20">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {movies.movies && movies.movies.results.map((movie: any) => {
            return (
              <MovieCard
                key={movie.id}
                poster_path={"https://image.tmdb.org/t/p/original" + movie.poster_path}
                overview={movie.overview}
                title={movie.title}
              />
            );
          })}
        </div>
      </div>
    </h2>
  );
}

export default App;
