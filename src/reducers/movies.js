export default (state = [], action) => {
 
   switch (action.type) {
 
     case 'EXAMPLE':
       return [...state]
 
     default:
       return state;
   }
 }