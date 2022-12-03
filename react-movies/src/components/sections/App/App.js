import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

function App() {

  const [searchInputValue, setSearchInputValue] = useState('');
  const [addTitleInputValue, setAddTitleInputValue] = useState('');
  const [addYearInputValue, setAddYearInputValue] = useState('');
  const [addSrcInputValue, setAddSrcInputValue] = useState('');

  const [movies, setMovies] = useState([]);
  //pomocniczy state do przetrzymywania zfiltrowanych filmów:
  const [fMovies, setFMovies] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/movies')
      .then((res)=>res.json())
      .then(data=>{
        setMovies(data)
        setFMovies(data)
      })

    // const moviesFromLS = localStorage.getItem('moviesLS');
    // if(moviesFromLS){setMovies(JSON.parse(moviesFromLS))}
    // else{moviesFromLS = localStorage.setItem('moviesLS', JSON.stringify(movies));}
  }, []);

  const handleFilter = (event) => {
    event.preventDefault();
   
    const filteredMovies = movies.filter(movie => {
          return movie.Title.toLowerCase().includes(searchInputValue.toLowerCase())
      });
    //const newMoviesArray = films.concat(filteredMovies);
    setFMovies(filteredMovies);
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
      id: uuidv4()
    }
    const newMoviesArray = movies.concat(newMovie);
    
    fetch('http://localhost:5000/movies/',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newMovie)
    })
    setFMovies(newMoviesArray);
    setMovies(newMoviesArray);

    //localStorage.setItem('moviesLS', JSON.stringify(newMoviesArray));
    setAddTitleInputValue('');
    setAddYearInputValue('');
    setAddSrcInputValue('');
  }

  const handleRemoveMovie = (idToRemove) => {
    const moviesWithRemovedItem = movies.filter(movie=>{
      return movie.id !== idToRemove
    })
    fetch(`http://localhost:5000/movies/${idToRemove}`, {
      method: 'DELETE'
    })
    setFMovies(moviesWithRemovedItem);
    setMovies(moviesWithRemovedItem);
    // localStorage.setItem('moviesLS', JSON.stringify(moviesWithRemovedItem));
  }

  const renderMovies = (renderedMovies) => {
              return (renderedMovies
                // .filter(movie => {
                //   return movie.Title.toLowerCase().includes(searchInputValue.toLowerCase())
                // })
                    .map(movie => {
                      return (
                        <div key={movie.id} className="container">
                          <div>
                              <img className="movie__poster" src={movie.Poster}/>
                          </div>
                          <div className="container_columns">
                              <p className="description">TYTUŁ:<br/> {movie.Title}</p>
                              
                              <p className="description">ROK:<br/> {movie.Year}</p>
                              <button onClick={()=>handleRemoveMovie(movie.id)}>remove</button>
                          </div>  
                        </div>
                      )
              }))
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
            
            {renderMovies(fMovies)
            }
            
          </div>
  
          
      </main>
      
    </div>
  );
}

export default App;