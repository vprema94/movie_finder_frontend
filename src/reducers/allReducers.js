let initialState = {
  whichPage: 'o',
  whichForm: 'b',
  landingMovies: [],
  movieInfo: []
}

export default (state=initialState, action) => {
  switch (action.type) {
      case 'CHANGE_PAGE':
        return {
          ...state, 
          whichPage: action.letter
        }

      case 'CHANGE_FORM':
        return {
          ...state, 
          whichForm: action.letter
        }

      case 'LAND_MOVIES':
        return {
          ...state,
          whichPage: 'a', 
          landingMovies: action.data
        }
      
      case 'CLICK_MOVIE':
        return {
          ...state,
          whichPage: 'm',
          movieInfo: action.movieInfo
        }

    default:
      return initialState;
    }
}