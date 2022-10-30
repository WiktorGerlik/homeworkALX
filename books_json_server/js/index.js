import { v4 as uuidv4 } from 'uuid';
import { get, post } from '../helpers/http';
import URLS from '../helpers/urls';

//to poniżej wycinam i przenoszę do urls.js:
// const URLS = {//DOBRA PRAKTYKA: z wielkiej litery zmienne - odnośniki
//   books: 'http://localhost:3000/books'
// }

  const list = document.querySelector('#list');
  const inputSearch = document.querySelector('#inputSearch');
  const searchForm = document.querySelector('#searchForm');
  const addForm = document.querySelector('#addForm');
  const addTitle = document.querySelector('#addTitle');
  const addYear = document.querySelector('#addYear');
  const addCategory = document.querySelector('#addCategory');
  const addAuthor = document.querySelector('#addAuthor');
  const addSrc = document.querySelector('#addSrc');
  const validator = document.querySelector('#validator');

  let storedBooks = [];

  const fetchBooks = () => {
    get(URLS.books)
    //fetch('http://localhost:3000/books')//to było na początku przed optymalizacjami
    //to nam robi funkcja get zaimportowana z http.js:
    // fetch(URLS.books)//zmienna do wskazania endpointu
    // .then((response) => {
    //   return response.json(); //zawsze przy fetchu
    // })
    .then(data => {//books tutaj wchodzą jako data
      storedBooks = data//w tym kroku tablica wypełnia się książkami z serwera
      renderBooks(data)//gdy dostaniemy odpowiedź z serwera, wyświetli ksiązki na stronie
    })
    //to nam robi funkcja get zaimportowana z http.js:
    // .catch(error => {
    //   console.log(error.message)
    // })
  }
  const postBook = (newBook) => {
    post(URLS.books, newBook)//(url, data) z http.js
    //to poniżej wycinamy bo robi to metoda post z helpers http.js ----->
    // fetch(URLS.books, {//zmienna do wskazania endpointu
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': "application/json"//informuję backend, w jakim formacie (json) wysyłam dane na serwer
    //   },
    //   body: JSON.stringify(newBook)
    // })
    // .then(res => res.json())       //<-----
    .then(() => {
      storedBooks.push(newBook);//krok aby dodała się książka przed odświeżeniem strony
      renderBooks(storedBooks)//krok aby wyświetliła się dodana książka przed odświeżeniem strony
    })
  }

  const renderBooks = (books) => {
    list.innerHTML = "";
    books.forEach(book => {
        list.innerHTML +=`
            <div class="container">
                <div class="container">
                    <img class="book__cover" src=${book.image} alt=${book.alt}>
                </div>
                <div class="container_columns">
                    <p class="description">TYTUŁ:</br> ${book.title}</p>
                    
                    <p class="description">ROK:</br> ${book.year}</p>
                    
                    <p class="description">KATEGORIA:</br> ${book.category}</p>
                    
                    <p class="description">AUTOR:</br> ${book.author}</p>
                </div>
                    
            </div>`;
        
    });
  };
//funkcja pomocnicza do walidacji - zwraca tylko input o ilości znaków minimum 3
  const validation = () => {
    return inputSearch.value.length > 2
  }

  const filterBooks = event => {
    event.preventDefault();
    list.innerHTML = "";
    validator.className = "display-none";
    if (validation () != true){
        renderBooks(storedBooks);
        return validator.className = "active";
    }

    const filteredBooks = storedBooks.filter(book => {
        return book.title.toLowerCase().includes(inputSearch.value.toLowerCase())
    });
    renderBooks(filteredBooks);
    inputSearch.value=''
  }
  const addBook = event => {
    event.preventDefault();
    const newBook =
    {
        id: uuidv4(), //WAŻNE!!! bez id serwer odpowie kodem 500!!!
        title: addTitle.value,
        year: addYear.value,
        category: addCategory.value,
        image: addSrc.value,
        alt: 'Book1',
        author: addAuthor.value
    }

    postBook(newBook)
    
    addTitle.value=''
    addYear.value=''
    addCategory.value=''
    addSrc.value=''
    addAuthor.value=''
  }
  //renderBooks(storedBooks);
  fetchBooks();
  searchForm.addEventListener('submit', filterBooks);
  addForm.addEventListener('submit', addBook)
