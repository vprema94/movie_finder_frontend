const API = 'http://localhost:3000';
const GB_BASE = 'http://api-public.guidebox.com/v2'

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
   return fetch(`${GB_BASE}/movies?limit=50`, {
      method: "GET",
      headers: {
      }
   }).then(res => res.json())
}