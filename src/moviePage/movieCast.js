import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Grid } from 'semantic-ui-react';

class MovieCast extends Component {
   render() {
      return(
         <Grid.Row>
            <Grid.Column>
               <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
            </Grid.Column>
            <Grid.Column>
               <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
            </Grid.Column>
         </Grid.Row>
      )
   }
}

const mapStatetoProps = state => {
   return ({
     movieInfo: state.movieInfo
   })
}

export default connect(mapStatetoProps)(MovieCast);