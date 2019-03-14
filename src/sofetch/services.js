const LOCAL = 'http://localhost:3000';
const KEY = ''
const GB_BASE = `http://api-public.guidebox.com/v2/movies?api_key=${KEY}`
const GB_MOVIE = `http://api-public.guidebox.com/v2/us/${KEY}/movie/`

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
   return fetch(`${GB_BASE}&limit=56`, {
      method: "GET"
   }).then(res => res.json())
}

export const getMovieInfo = (movieId) => {
   return fetch(`${GB_MOVIE}${movieId}`, {
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

// finishLogin = (res) => {
//    res.json()
//    .then(data => {
//       setTimeout(() => {
//          this.setState({
//             myPokemonList: data.pokemons,
//             filteredPoke: data.pokemons,
//             mainPoke: data.pokemons[0],
//             currentUser: data,
//             enterPage: 'a'
//          })
//       }, 3000)
//    })
//    this.renderRandomPoke()
// }