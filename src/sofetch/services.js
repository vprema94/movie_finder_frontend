const API = 'http://localhost:3000';
const KEY = ''

export const handleNewUser = (username, password) => {
   return fetch(`${API}/users`, {
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
   return fetch(`http://api-public.guidebox.com/v2/movies?api_key=${KEY}&limit=50`, {
      method: "GET"
   }).then(res => res.json())
}