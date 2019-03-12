let initialRenderState = {
  whichPage: 'o',
  whichForm: 'b'
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

    default:
      return initialRenderState;
    }
}