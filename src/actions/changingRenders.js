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