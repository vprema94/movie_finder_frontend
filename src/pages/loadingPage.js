import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import loadingPic from '../images/loading2.gif'


class LoadingPage extends Component {

   render() {
      return(
         <div>
            <Image id='loading-pic' src={loadingPic}/>
         </div>
      )
   }
} 

export default (LoadingPage);