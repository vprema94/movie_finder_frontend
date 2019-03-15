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