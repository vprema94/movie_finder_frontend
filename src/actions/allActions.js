export const changePage = (letter) => {
   return {
      type: 'CHANGE_PAGE',
      letter
   }
}

export const changeForm = (letter) => {
   return {
      type: 'CHANGE_FORM',
      letter
   }
} 

export const landMovies = (data) => {
   return {
      type: 'LAND_MOVIES',
      data
   }
} 

export const landMoreMovies = (data) => {
   return {
      type: 'LAND_MORE_MOVIES',
      data
   }
}

export const clickMovie = (movieInfo) => {
   return {
      type: 'CLICK_MOVIE',
      movieInfo
   }
} 

export const clickPerson = (personInfo) => {
   return {
      type: 'CLICK_PERSON',
      personInfo
   }
}

export const clickPersonTwo = (personMovies) => {
   return {
      type: 'CLICK_PERSON_TWO',
      personMovies
   }
}

export const setUserFavorites = (favoriteMovies) => {
   return {
      type: 'SET_USER_FAVORITES',
      favoriteMovies
   }
}

export const setCurrentUser = (user_id) => {
   return {
      type: 'SET_CURRENT_USER',
      user_id
   }
} 

export const toggleFilter = (source) => {
   return {
      type: 'TOGGLE_FILTER',
      source   
   }
}  

export const toggleFavFilter = (genre) => {
   return {
      type: 'TOGGLE_FAV_FILTER',
      genre
   }
} 

export const setFilteredFavs = (filteredFavs) => {
   return {
      type: 'SET_FILTERED_FAVS',
      filteredFavs
   }
}