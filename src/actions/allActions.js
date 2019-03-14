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