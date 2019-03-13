let initialRenderState = {
  whichPage: 'o',
  whichForm: 'b',
  landingMovies: []
}

export default (state=initialRenderState, action) => {
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

    default:
      return initialRenderState;
    }
}