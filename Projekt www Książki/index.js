const books = [
    {
        title: 'baśniowa opowieść',
        year: '2022',
        category: 'fantasy',
        image: "https://ecsmedia.pl/c/basniowa-opowiesc-w-iext117122105.jpg",
        alt: 'Book1',
        author: "Stephen King"
    },
    {
        title: 'the atlas six',
        year: '2022',
        category: 'fantasy',
        image: "https://ecsmedia.pl/c/the-atlas-six-w-iext120077424.jpg",
        alt: 'Book1',
        author: "Olivie Blake"
    },
    {
        title: 'krew i popiół',
        year: '2022',
        category: 'fantasy',
        image: "https://ecsmedia.pl/c/krew-i-popiol-tom-1-w-iext115531667.jpg",
        alt: 'Book1',
        author: "Armentrout Jennifer L."
    },
    {
        title: 'hobbit',
        year: '2014',
        category: 'fantasy',
        image: "https://ecsmedia.pl/c/hobbit-w-iext117197058.jpg",
        alt: 'Book1',
        author: "Tolkien John Ronald Reuel"
    },
    {
        title: 'zbigniew ziobro. prawdziwe oblicze',
        year: '2022',
        category: 'biografie',
        image: "https://ecsmedia.pl/c/zbigniew-ziobro-prawdziwe-oblicze-w-iext119920880.jpg",
        alt: 'Book1',
        author: "Renata Grochal"
    },
    {
        title: 'jan borysewicz. mniej obcy',
        year: '2022',
        category: 'biografie',
        image: "https://ecsmedia.pl/c/jan-borysewicz-mniej-obcy-w-iext119879444.jpg",
        alt: 'Book1',
        author: "Jan Borysewicz, Prokop Marcin"
    },
    {
        title: 'prawdziwa królowa. elżbieta II',
        year: '2022',
        category: 'biografie',
        image: "https://ecsmedia.pl/c/prawdziwa-krolowa-elzbieta-ii-jakiej-nie-znamy-w-iext115603965.jpg",
        alt: 'Book1',
        author: "Marr Andrew"
    },
    {
        title: 'ania. biografia anny przybylskiej',
        year: '2022',
        category: 'biografie',
        image: "https://ecsmedia.pl/c/ania-biografia-anny-przybylskiej-w-iext119858677.jpg",
        alt: 'Book1',
        author: "Kubicki Grzegorz, Drzewicki Maciej"
    },

  ];

  const list = document.querySelector('#list');

  const showEntireList = (collection) => {
    return collection.forEach(element => {
    list.innerHTML += 
    `
    <div class="container">
        <div class="container">
            <img class="description" src=${element.image} alt=${element.alt}>
        </div>
        <div class="container_columns">
            <p class="description">TYTUŁ:</br> ${element.title}</p>
               
            <p class="description">ROK:</br> ${element.year}</p>
              
            <p class="description">KATEGORIA:</br> ${element.category}</p>
               
            <p class="description">AUTOR:</br> ${element.author}</p>
        </div>
            
    </div>`;
    })
} 

    showEntireList (books);

    const searchForm = document.querySelector('#form');
    const inputSearch = document.querySelector('#inputSearch');
    
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const allShownSelect = list.querySelectorAll('div');

        allShownSelect.forEach(element => {
            element.remove();
        });

        console.log(inputSearch.value);


        const filteredList = (collection, phrase) => {
            return collection.filter(element => {
                return element.title.includes(phrase);
            });
        }
        const showFilteredArray = filteredList(books, inputSearch.value);//tablica z przefiltrowanymi tytułami
        console.log(showFilteredArray);//zwraca tablicę obiektów w konsoli
        showFilteredArray.forEach(element => {    
                list.innerHTML += 
                `
                <div class="container">
                    <div class="container">
                        <img class="description" src=${element.image} alt=${element.alt}>
                    </div>
                    <div class="container_columns">
                        <p class="description">TYTUŁ:</br> ${element.title}</p>
                        
                        <p class="description">ROK:</br> ${element.year}</p>
                        
                        <p class="description">KATEGORIA:</br> ${element.category}</p>
                        
                        <p class="description">AUTOR:</br> ${element.author}</p>
                    </div>
                        
                </div>`;
        });
        inputSearch.value = ""; 
    })

    
    
    
    

    