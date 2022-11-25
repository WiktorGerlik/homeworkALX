import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';



import './App.css';

// const baseFilms = [
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
//     imdbID: "tt0499549",
//   },
//   {
//     Title: "I Am Legend",
//     Year: "2007",
//     Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
//     imdbID: "tt0480249",
//   },
//   {
//     Title: "300",
//     Year: "2006",
//     Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
//     imdbID: "tt0416449",
//   }
// ]


function App() {

  const [searchInputValue, setSearchInputValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [addTitleInputValue, setAddTitleInputValue] = useState('');
  const [addYearInputValue, setAddYearInputValue] = useState('');
  const [addSrcInputValue, setAddSrcInputValue] = useState('');

  useEffect(()=>{
    fetch('http://localhost:5000/movies')
      .then((res)=>res.json())
      .then(data=>{
        setMovies(data)})

    // const moviesFromLS = localStorage.getItem('moviesLS');
    // if(moviesFromLS){setMovies(JSON.parse(moviesFromLS))}
    // else{moviesFromLS = localStorage.setItem('moviesLS', JSON.stringify(movies));}
  }, []);
//na razie nie filtruje ponownie, tlko zmienia tablice na odfiltrowane!

  const handleFilter = (event) => {
    event.preventDefault();
   
    const filteredMovies = movies.filter(movie => {
          return movie.Title.toLowerCase().includes(searchInputValue.toLowerCase())
      });
    //const newMoviesArray = films.concat(filteredMovies);
    setMovies(filteredMovies);
    setSearchInputValue('');
  }

  const handleSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
  }

  const handleAddTitleInputChange = (event) => {
    setAddTitleInputValue(event.target.value);
  }

  const handleAddYearInputChange = (event) => {
    setAddYearInputValue(event.target.value);
  }

  const handleAddSrcInputChange = (event) => {
    setAddSrcInputValue(event.target.value);
  }

  const handleAdd = (event) => {
    event.preventDefault();
    const newMovie = {
      Title: addTitleInputValue,
      Year: addYearInputValue,
      Poster: addSrcInputValue,
      imdbID: uuidv4()
    }
    const newMoviesArray = movies.concat(newMovie);
    setMovies(newMoviesArray);
    fetch('http://localhost:5000/movies/',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newMovie)
    })

    //localStorage.setItem('moviesLS', JSON.stringify(newMoviesArray));
    setAddTitleInputValue('');
    setAddYearInputValue('');
    setAddSrcInputValue('');
  }

  const handleRemoveMovie = (idToRemove) => {
    const moviesWithRemovedItem = movies.filter(movie=>{
      return movie.imdbID !== idToRemove
    })
    setMovies(moviesWithRemovedItem);
    fetch(`http://localhost:5000/movies/${idToRemove}`, {
      method: 'DELETE'
    })

    // localStorage.setItem('moviesLS', JSON.stringify(moviesWithRemovedItem));
  }
  
  return (
    <div className="App">
      <nav>
        
        <a className="main_site_button" href="http://localhost:3000"><h2>Strona główna</h2></a>
        <div className="navContainer">
          <div className="input__flex">
            
              <form onSubmit={handleFilter} id="searchForm">
                <label htmlFor="inputSearch"></label>
                <input value={searchInputValue} onChange={handleSearchInputChange} className = "" type="text" id="inputSearch" name="inputSearch" placeholder="wpisz tytuł..."/>
                <p id = "validator" className="display-none">Wpisz co najmniej 3 litery</p>
                <button type="submit" className="" id="btnSearch">Szukaj</button>
              </form>
          
              
              
          </div>
  
          <div className="formAdd">
  
              <form onSubmit={handleAdd} id="addForm">
                <label htmlFor="addTitle"></label>
                <input value={addTitleInputValue} onChange={handleAddTitleInputChange} className = "" type="text" id="addTitle" name="addTitle" placeholder="dodaj tytuł..."/>
  
                <label htmlFor="addYear"></label>
                <input value={addYearInputValue} onChange={handleAddYearInputChange} className = "" type="text" id="addYear" name="addYear" placeholder="dodaj rok..."/>

                <label htmlFor="addSrc"></label>
                <input value={addSrcInputValue} onChange={handleAddSrcInputChange} className = "" type="text" id="addSrc" name="addSrc" placeholder="dodaj źródło okładki..."/>
  
                <button type="submit" className="" id="btnAdd">Dodaj film</button>
              </form>
  
          </div>
  
        </div>      
      </nav>
  
      <main>
          <h2>
              Lista filmów:
          </h2>
  
          <div id="list" className="list" type="list">
            
            {movies
      //       .filter(movie => {
      //     return movie.Title.toLowerCase().includes(searchInputValue.toLowerCase())
      // })
      .map(movie => {
              return (
                <div key={movie.imdbID} className="container">
                  <div>
                      <img className="movie__poster" src={movie.Poster}/>
                  </div>
                  <div className="container_columns">
                      <p className="description">TYTUŁ:<br/> {movie.Title}</p>
                      
                      <p className="description">ROK:<br/> {movie.Year}</p>
                      <button onClick={()=>handleRemoveMovie(movie.imdbID)}>remove</button>
                  </div>  
                </div>
              )
            })}
            
          </div>
  
          
      </main>
      
    </div>
  );
}

export default App;