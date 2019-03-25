import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Divider, Grid, Embed } from 'semantic-ui-react';
import { getMovieTrailer } from '../sofetch/services';


class Trailer extends Component {

   constructor() {
      super()

      this.state = {
         movieTrailer: null
      }
   } 

   componentDidMount() {
      getMovieTrailer(this.props.movieInfo.themoviedb)
      .then((data) => {
         if (data.results) {
            let trailerInfo = data.results.find(trailer => trailer.name.toLowerCase().includes('trailer'))
            this.setState({movieTrailer: trailerInfo.key})
         } else {
            this.setState({movieTrailer: null})
         }
      })
   }

   render() {
      let trailer
      if (this.state.movieTrailer === null) {
         trailer = <p id='no-trailer'>Sorry, trailer does not exist.</p>
      } else {
         trailer = <Embed id={this.state.movieTrailer}
         placeholder='/images/image-16by9.png' source='youtube' active={true} aspectRatio='16:9' autoplay={false} />
      } 

      return(
         <Grid.Row id='trailer-container'>
            <b>TRAILER</b>
            <Divider />
            <br/>
            <Container>
               {trailer}
            </Container>
         </Grid.Row>
      )
   }
}

const mapStatetoProps = state => {
   return ({
     movieInfo: state.movieInfo
   })
}

export default connect(mapStatetoProps)(Trailer);