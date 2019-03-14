import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Image, Divider, Grid, Card } from 'semantic-ui-react';

class MovieInfo extends Component {
   render() {
      return(
         <Grid.Row id='movie-pg-body'>
            <Grid.Column>
               <Container id='movie-poster'>
                  <Image src={this.props.movieInfo['poster_400x570']}></Image>
               </Container>
            </Grid.Column>

            <Grid.Column>
               <Container id='movie-stuff'>
                  <b>OVERVIEW</b>
                  <Divider />
                  <p>{this.props.movieInfo.overview}</p>
                  <br/><br/>
                  <b>WATCH IT ON:</b>
                  <Divider />
                  <Container id='sources-container'>
                     <Card id='source-icon'>
                        <Image id='icon-image' src={'https://lh3.googleusercontent.com/jcbqFma-5e91cY9MlEasA-fvCRJK493MxphrqbBd8oS74FtYg00IXeOAn0ahsLprxIA=w300-rw'}></Image>
                     </Card>

                     <Card id='source-icon'>
                        <Image id='icon-image' src={'data:image/jpeg;base64,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'}>
                        </Image>
                     </Card>
                  </Container>
               </Container>
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

export default connect(mapStatetoProps)(MovieInfo);