//reużywalna metoda POST do wysyłania na serwer:
export const post = (url, data) => {
    return fetch(url, {//zmienna do wskazania endpointu
        method: 'POST',
        headers: {
          'Content-Type': "application/json"//informuję backend, w jakim formacie (json) wysyłam dane na serwer
        },
        body: JSON.stringify(data)//było (newBook)
      })
      .then(res => res.json())
}
export const get = (url) => {
    return fetch(url)//zmienna do wskazania endpointu
    .then((response) => {
      return response.json(); //zawsze przy fetchu
    })
    .catch(error => {
        console.log(error.message)
      })
}
