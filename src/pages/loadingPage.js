import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import loadingPic from '../images/loading2.gif'
import { withRouter } from 'react-router-dom';

class LoadingPage extends Component {

   render() {
      return(
         <div id="loading-background">
            <Image id='loading-pic' src={loadingPic}/>
         </div>
      )
   }
} 

export default withRouter(LoadingPage);