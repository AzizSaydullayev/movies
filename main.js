const movies = [
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Patton Oswalt: Annihilation",
    "imdb_rating": 7.4,
    "movie_year": 2017,
    "Categories": "Comedy|Documentary"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "New York Doll",
    "imdb_rating": 7.9,
    "movie_year": 2005,
    "Categories": "Documentary|Music"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Jaws",
    "imdb_rating": 8.0,
    "movie_year": 1975,
    "Categories": "Horror|Thriller"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "The Lion King",
    "imdb_rating": 8.5,
    "movie_year": 1994,
    "Categories": "Family|Animation"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Inception",
    "imdb_rating": 8.8,
    "movie_year": 2010,
    "Categories": "Action|Sci-Fi"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "The Dark Knight",
    "imdb_rating": 9.0,
    "movie_year": 2008,
    "Categories": "Action|Crime|Drama"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "The Matrix",
    "imdb_rating": 8.7,
    "movie_year": 1999,
    "Categories": "Action|Sci-Fi"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "The Godfather",
    "imdb_rating": 9.2,
    "movie_year": 1972,
    "Categories": "Crime|Drama"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Pulp Fiction",
    "imdb_rating": 8.9,
    "movie_year": 1994,
    "Categories": "Crime|Drama"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "The Shawshank Redemption",
    "imdb_rating": 9.3,
    "movie_year": 1994,
    "Categories": "Drama"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Titanic",
    "imdb_rating": 7.8,
    "movie_year": 1997,
    "Categories": "Drama|Romance"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "The Avengers",
    "imdb_rating": 8.0,
    "movie_year": 2012,
    "Categories": "Action|Adventure|Sci-Fi"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Avengers: Endgame",
    "imdb_rating": 8.4,
    "movie_year": 2019,
    "Categories": "Action|Adventure|Drama"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Frozen",
    "imdb_rating": 7.4,
    "movie_year": 2013,
    "Categories": "Animation|Adventure|Comedy"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "The Grand Budapest Hotel",
    "imdb_rating": 8.1,
    "movie_year": 2014,
    "Categories": "Comedy|Drama"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "The Social Network",
    "imdb_rating": 8.0,
    "movie_year": 2010,
    "Categories": "Biography|Drama"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Gladiator",
    "imdb_rating": 8.5,
    "movie_year": 2000,
    "Categories": "Action|Adventure|Drama"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Mad Max: Fury Road",
    "imdb_rating": 8.1,
    "movie_year": 2015,
    "Categories": "Action|Adventure|Sci-Fi"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "The Princess Bride",
    "imdb_rating": 8.1,
    "movie_year": 1987,
    "Categories": "Adventure|Comedy|Family"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Jurassic Park",
    "imdb_rating": 8.1,
    "movie_year": 1993,
    "Categories": "Adventure|Sci-Fi|Thriller"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "The Terminator",
    "imdb_rating": 8.0,
    "movie_year": 1984,
    "Categories": "Action|Sci-Fi|Thriller"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Spider-Man: No Way Home",
    "imdb_rating": 8.3,
    "movie_year": 2021,
    "Categories": "Action|Adventure|Sci-Fi"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Star Wars: A New Hope",
    "imdb_rating": 8.6,
    "movie_year": 1977,
    "Categories": "Action|Adventure|Fantasy"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Interstellar",
    "imdb_rating": 8.6,
    "movie_year": 2014,
    "Categories": "Adventure|Drama|Sci-Fi"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "The Silence of the Lambs",
    "imdb_rating": 8.6,
    "movie_year": 1991,
    "Categories": "Crime|Drama|Thriller"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "The Big Lebowski",
    "imdb_rating": 8.1,
    "movie_year": 1998,
    "Categories": "Comedy|Crime"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "The Prestige",
    "imdb_rating": 8.5,
    "movie_year": 2006,
    "Categories": "Drama|Mystery|Sci-Fi"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Fight Club",
    "imdb_rating": 8.8,
    "movie_year": 1999,
    "Categories": "Drama"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Forrest Gump",
    "imdb_rating": 8.8,
    "movie_year": 1994,
    "Categories": "Drama|Romance"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Schindler's List",
    "imdb_rating": 9.0,
    "movie_year": 1993,
    "Categories": "Biography|Drama|History"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "The Dark Knight Rises",
    "imdb_rating": 8.4,
    "movie_year": 2012,
    "Categories": "Action|Adventure|Thriller"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Shutter Island",
    "imdb_rating": 8.1,
    "movie_year": 2010,
    "Categories": "Mystery|Thriller"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "The Godfather: Part II",
    "imdb_rating": 9.0,
    "movie_year": 1974,
    "Categories": "Crime|Drama"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "A Clockwork Orange",
    "imdb_rating": 8.3,
    "movie_year": 1971,
    "Categories": "Crime|Drama|Sci-Fi"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Blade Runner 2049",
    "imdb_rating": 8.0,
    "movie_year": 2017,
    "Categories": "Drama|Mystery|Sci-Fi"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "12 Angry Men",
    "imdb_rating": 9.0,
    "movie_year": 1957,
    "Categories": "Drama"
  },
  {
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s",
    "Title": "Saving Private Ryan",
    "imdb_rating": 8.6,
    "movie_year": 1998,
    "Categories": "Drama|War"
  }
];

const container = document.getElementById('poc-con');
const search = document.querySelector('.search');
const sort = document.querySelector('#sort');
const category = document.querySelector('#category');

function render(array) {
  container.innerHTML = '';
  array.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    const img = document.createElement('img');
    img.src = item.img || 'default-image.jpg';
    card.appendChild(img);

    const Title = document.createElement('h2');
    Title.textContent = item.Title || 'No Title';
    card.appendChild(Title);

    const imdb_rating = document.createElement('h3');
    imdb_rating.textContent = ` ${item.imdb_rating || 'No Rating'}`;
    card.appendChild(imdb_rating);

    const movie_year = document.createElement('p');
    movie_year.textContent = ` ${item.movie_year || 'Unknown'}`;
    card.appendChild(movie_year);

    const Categories = document.createElement('p');
    Categories.textContent = ` ${item.Categories || 'Unknown'}`;
    card.appendChild(Categories);

    container.appendChild(card);
  });



}

render(movies);

category.addEventListener('change', e => {
  const categoryInput = e.target.value.toLowerCase();
  const filteredMovies = movies.filter(item =>
    item.Categories.toLowerCase().includes(categoryInput)
  );
  render(filteredMovies.length ? filteredMovies : movies);
});

search.addEventListener('input', e => {
  const searchInput = e.target.value.toLowerCase();
  const searchResults = movies.filter(item =>
    item.Title.toLowerCase().includes(searchInput)
  );
  render(searchResults.length ? searchResults : movies);
});

sort.addEventListener('change', e => {
  const value = e.target.value;
  let sortedMovies = [...movies];

  if (value === 'a-z') {
    sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (value === 'z-a') {
    sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
  } else if (value === 'min') {
    sortedMovies.sort((a, b) => a.movie_year - b.movie_year);
  } else if (value === 'max') {
    sortedMovies.sort((a, b) => b.movie_year - a.movie_year);
  }

  render(sortedMovies);
});