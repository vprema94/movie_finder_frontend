import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
// import loadingPic from '../images/loading2.gif'
import loadingPic from '../images/constructionPika.gif'
import { withRouter } from 'react-router-dom';

class LoadingPage extends Component {

   render() {
      return(
         <div id="loading-background">
            <h1 style={{color: white}}>Sorry, we are under construction</h1>
            <Image id='loading-pic' style={{width: 50+'px'}} src={loadingPic}/>
         </div>
      )
   }
} 

export default withRouter(LoadingPage);