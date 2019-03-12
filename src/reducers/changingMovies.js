let initialMovieState = {
   landMovies: []
 }
 
 export default (state=initialMovieState, action) => {
   switch (action.type) {
       case 'LAND_MOVIES':
         return {
           ...state, 
           landMovies: action.data
         }
 
     default:
       return initialMovieState;
     }
 }