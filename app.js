// Taskiniz: Mehsur filmlerin movcud oldugu bir api url tapin.
// O apiden istifade ederek, filmin adlarini console-da gosterin
// let search_movie_name = prompt("enter movie name");
// let m_name = search_movie_name.trim().replaceAll(" ", "+"); //API soz arasi + seklinde qebul edir ona gore bele yazdim
// console.log(m_name);

// fetch(`https://www.omdbapi.com/?apikey=7e0b241b&t=${m_name}`)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

fetch(
  `https://api.themoviedb.org/3/movie/popular?api_key=bd14c36485c7e50b78f400932f4ab4e3`)
    .then((res) => res.json())
    .then((data) => {
      data.results.map((el) => {console.log(el.title)});
    });
  
  