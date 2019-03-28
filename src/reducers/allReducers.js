let initialState = {
  landingMovies: [],
  movieInfo: [],
  personInfo: [],
  personMovies: [],
  favorites: [], 
  currentUser: null,
  filter: 'all',
  filteredFavorites: [],
  favFilter: 'all'
}

export default (state=initialState, action) => {
  switch (action.type) {

      case 'LAND_MOVIES':
        return {
          ...state,
          landingMovies: action.data
        } 

      case 'LAND_MORE_MOVIES':
        return {
          ...state,
          landingMovies: [...state.landingMovies, ...action.data]
        }
      
      case 'CLICK_MOVIE':
        return {
          ...state,
          movieInfo: action.movieInfo
        }
      
      case 'CLICK_PERSON':
      console.log(action.personInfo)
        return {
          ...state,
          personInfo: action.personInfo
        }

      case 'CLICK_PERSON_TWO':
      console.log(action.personMovies)
        return {
          ...state,
          personMovies: action.personMovies
        }

        case 'SET_CURRENT_USER':
        return {
          ...state,
          currentUser: action.user_id
        } 

        case 'SET_USER_FAVORITES':
        return {
          ...state,
          favorites: action.favoriteMovies
        } 

        case 'TOGGLE_FILTER':
        return {
          ...state, 
          filter: action.source
        } 

        case 'SET_FILTERED_FAVS':
        return {
          ...state,
          filteredFavorites: action.filteredFavs
        } 

        case 'TOGGLE_FAV_FILTER':
        return {
          ...state, 
          favFilter: action.genre
        }
        
    default:
      return initialState;
    }
}