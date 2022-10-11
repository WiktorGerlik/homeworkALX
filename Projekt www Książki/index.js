const books = [
    {
        title: 'BAŚNIOWA OPOWIEŚĆ',
        year: '2022',
        category: 'fantasy',
        image: "https://ecsmedia.pl/c/basniowa-opowiesc-w-iext117122105.jpg",
        alt: 'Book1',
        author: "Stephen King"
    },
    {
        title: 'The Atlas Six',
        year: '2022',
        category: 'fantasy',
        image: "https://ecsmedia.pl/c/the-atlas-six-w-iext120077424.jpg",
        alt: 'Book1',
        author: "Olivie Blake"
    },
    {
        title: 'Krew i popiół',
        year: '2022',
        category: 'fantasy',
        image: "https://ecsmedia.pl/c/krew-i-popiol-tom-1-w-iext115531667.jpg",
        alt: 'Book1',
        author: "Armentrout Jennifer L."
    },
    {
        title: 'Hobbit',
        year: '2014',
        category: 'fantasy',
        image: "https://ecsmedia.pl/c/hobbit-w-iext117197058.jpg",
        alt: 'Book1',
        author: "Tolkien John Ronald Reuel"
    },
    {
        title: 'Zbigniew Ziobro. Prawdziwe oblicze',
        year: '2022',
        category: 'biografie',
        image: "https://ecsmedia.pl/c/zbigniew-ziobro-prawdziwe-oblicze-w-iext119920880.jpg",
        alt: 'Book1',
        author: "Renata Grochal"
    },
    {
        title: 'Jan Borysewicz. Mniej obcy',
        year: '2022',
        category: 'biografie',
        image: "https://ecsmedia.pl/c/jan-borysewicz-mniej-obcy-w-iext119879444.jpg",
        alt: 'Book1',
        author: "Jan Borysewicz, Prokop Marcin"
    },
    {
        title: 'Prawdziwa Królowa. Elżbieta II',
        year: '2022',
        category: 'biografie',
        image: "https://ecsmedia.pl/c/prawdziwa-krolowa-elzbieta-ii-jakiej-nie-znamy-w-iext115603965.jpg",
        alt: 'Book1',
        author: "Marr Andrew"
    },
    {
        title: 'Ania. Biografia Anny Przybylskiej',
        year: '2022',
        category: 'biografie',
        image: "https://ecsmedia.pl/c/ania-biografia-anny-przybylskiej-w-iext119858677.jpg",
        alt: 'Book1',
        author: "Kubicki Grzegorz, Drzewicki Maciej"
    },

  ];

  const list = document.querySelector('#list');
  const inputSearch = document.querySelector('#inputSearch');
  const btnSearch = document.querySelector('#btnSearch');

  let showEntireList = books.forEach(book => {
    list.innerHTML += 
    `
    <div class="container">
        <div class="container">
            <img class="description" src=${book.image} alt=${book.alt}>
        </div>
        <div class="container_columns">
            <p class="description">TYTUŁ:</br> ${book.title}</p>
               
            <p class="description">ROK:</br> ${book.year}</p>
              
            <p class="description">KATEGORIA:</br> ${book.category}</p>
               
            <p class="description">AUTOR:</br> ${book.author}</p>
        </div>
            
    </div>`;
    })
    