import React,{useState} from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];
  //here i am not using dummymovies as it is hardcoded and not effective so lets use usestate Hook
  const[movies,setMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  // function fetchMoviesHandler(){
  //   fetch('https://swapi.dev/api/films/1/')
  //     .then((response )=>{return response.json()
  //     })
  //     .then((data)=>{
  //         const transformedMovies = data.results.map((movieData)=>{
  //           return{
  //             id:movieData.episode_id,
  //             title:movieData.title,
  //             openingText:movieData.opening_crawl,
  //             releaseDate: movieData.release_date
  //           };
  //         });
  //         setMovies(transformedMovies);
  //       });
  // }

//here lets implement loading... and use async function
  async function fetchMoviesHandler() {
    setIsLoading(true);
   const response = await fetch('https://swapi.dev/api/films/')
   const data = await response.json();
      const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
        setIsLoading(false);
      };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
       {!isLoading && movies.length>0 &&<MoviesList movies={movies} /> } 
       {!isLoading && movies.length === 0 && <p> </p>}
       {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
