const API = 'http://localhost:3000';

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