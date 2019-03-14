let initialState = {
  whichPage: 'o',
  whichForm: 'b',
  landingMovies: [],
  movieInfo: [],
  personInfo: [],
  personMovies: []
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
      
      case 'CLICK_PERSON':
        return {
          ...state,
          whichPage: 'p',
          personInfo: action.personInfo
        }

      case 'CLICK_PERSON_TWO':
        return {
          ...state,
          whichPage: 'p',
          personMovies: action.personMovies
        }

    default:
      return initialState;
    }
}