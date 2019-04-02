const LOCAL = 'https://pacific-ocean-14825.herokuapp.com';
const KEY = `6e21e1c2e72e7bfb98c9e0e6f7114dd18391dcce`
const GB_BASE = `https://api-public.guidebox.com/v2/us/${KEY}`
const MDB_BASE = `https://api.themoviedb.org/3/movie`
const MDB_KEY = `07583907ce52b046bc98c4ddc696f915`

export const handleNewUser = (username, password) => {
   return fetch(`${LOCAL}/users`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         username: username,
         password: password,
      })
   }).then(res => res.json())
} 

export const getMovies = () => {
   return fetch(`${GB_BASE}/movies/all/0/56`, {
      method: "GET"
   }).then(res => res.json())
} 

export const getMoreMovies = (start) => {
   return fetch(`${GB_BASE}/movies/all/${start}/56`, {
      method: "GET"
   }).then(res => res.json())
} 

export const getFilteredMovies = (source) => {
   return fetch(`${GB_BASE}/movies/all/0/56/${source}`, {
      method: "GET"
   }).then(res => res.json())
}

export const getMoreFilteredMovies = (start, source) => {
   return fetch(`${GB_BASE}/movies/all/${start}/56/${source}`, {
      method: "GET"
   }).then(res => res.json())
}

export const getSearch = (entry) => {
   return fetch(`${GB_BASE}/search/movie/title/${entry}`, {
      method: "GET"
   }).then(res => res.json())
}

export const getMovieInfo = (movieId) => {
   return fetch(`${GB_BASE}/movie/${movieId}`, {
      method: "GET"
   }).then(res => res.json())
} 

export const getMovieTrailer = (movieId) => {
   return fetch(`${MDB_BASE}/${movieId}/videos?api_key=${MDB_KEY}`, {
      method: "GET"
   }).then(res => res.json())
}

export const getPersonInfo = (personId) => {
   return fetch(`${GB_BASE}/person/${personId}`, {
      method: "GET"
   }).then(res => res.json())
}

export const getPersonMovies = (personId) => {
   return fetch(`${GB_BASE}/person/${personId}/credits/movies/cast`, {
      method: "GET"
   }).then(res => res.json())
}

export const getAuthToken = (loginInfo) => {
   return fetch(`${LOCAL}/login`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(loginInfo)
   }).then(res => res.json())
} 

export const getFavorites = (user_id) => {
   return fetch(`${LOCAL}/users/${user_id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         "Authorization": localStorage.getItem('token')
      }
   }).then(res => res.json())
}

export const handleNewFavorite = (favorite_params) => {
   return fetch(`${LOCAL}/movies`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         "Authorization": localStorage.getItem('token')
      },
      body: JSON.stringify({
         title: favorite_params.title,
         search_id: favorite_params.search_id,
         poster: favorite_params.poster,
         genre: favorite_params.genre,
         user_id: favorite_params.user_id
      })
   }).then(res => res.json())
} 

export const deleteFavorite = (user_id, movie_id) => {
   return fetch(`${LOCAL}/removeFavorites`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      },
      body: JSON.stringify({
         user_id: user_id,
         movie_id: movie_id
      })
   })  
} 