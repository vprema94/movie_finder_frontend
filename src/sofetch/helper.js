import netflix from '../images/icons/netflix.jpeg'
import prime from '../images/icons/prime.jpg'
import google from '../images/icons/google.png'
import hbo from '../images/icons/hbo.png'
import hulu from '../images/icons/hulu.jpg'
import itunes from '../images/icons/itunes.png'
import amazon from '../images/icons/amazon.png'
import vudu from '../images/icons/vudu.png'
import youtube from '../images/icons/youtube.png'


export const makeIcons = (movieInfo) => {
   let sourceArr = []
   
   movieInfo.subscription_web_sources.forEach((source) => {
      switch(source.display_name) {
         case "Netflix":
            sourceArr.push({...source, icon: netflix})
            break;
         case "Amazon Prime":
            sourceArr.push({...source, icon: prime})
            break;
         case "Hulu":
            sourceArr.push({...source, icon: hulu})
            break;
         case "HBO NOW":
            sourceArr.push({...source, icon: hbo})
            break;
         default:
            break
      }
   })
   
   movieInfo.purchase_web_sources.forEach((source) => {
      switch(source.display_name) {
         case "iTunes":
            sourceArr.push({...source, icon: itunes})
            break;
         case "Amazon":
            sourceArr.push({...source, icon: amazon})
            break;
         case "VUDU":
            sourceArr.push({...source, icon: vudu})
            break;
         case "Google Play":
            sourceArr.push({...source, icon: google})
            break;
         case "YouTube":
            sourceArr.push({...source, icon: youtube})
            break;
         default:
            break
      }
   })
   return sourceArr
}  

export const allSources = [
   {  text: 'ALL',
      value:'all' }, 
   {  text: 'NETFLIX',
      value:'netflix'}, 
   {  text: 'HULU',
      value:'hulu_plus' },
   {  text: 'AMAZON PRIME',
      value:'amazon_prime' }, 
   {  text: 'HBO NOW',
      value:'hbo_now' }
] 

export const allGenres = [
   {  text: 'ALL',
      value:'all' }, 
   {  text: 'ACTION',
      value:'action' }, 
   {  text: 'ADVENTURE',
      value:'adventure'}, 
   {  text: 'ANIMATION',
      value:'animation' },
   {  text: 'BIOGRAPHY',
      value:'biography' }, 
   {  text: 'CHILDREN',
      value:'children' },
   {  text: 'COMEDY',
      value:'comedy' }, 
   {  text: 'CRIME',
      value:'crime'}, 
   {  text: 'DOCUMENTARY',
      value:'documentary' },
   {  text: 'DRAMA',
      value:'drama' }, 
   {  text: 'FAMILY',
      value:'family' },
   {  text: 'FANTASY',
      value:'fantasy' }, 
   {  text: 'HISTORY',
      value:'history'}, 
   {  text: 'HORROR',
      value:'horror' },
   {  text: 'MUSICAL',
      value:'musical' }, 
   {  text: 'MYSTERY',
      value:'mystery' },
   {  text: 'ROMANCE',
      value:'romance'}, 
   {  text: 'SCIENCE FICTION',
      value:'science-fiction' },
   {  text: 'SPORT',
      value:'sport' }, 
   {  text: 'THRILLER',
      value:'thriller' },
   {  text: 'WAR',
      value:'war' }, 
   {  text: 'WESTERN',
      value:'western' },
]