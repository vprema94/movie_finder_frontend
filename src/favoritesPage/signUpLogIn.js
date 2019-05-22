import { Modal, Header, Icon, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

class SignUpLogIn extends Component {
   render() {
      return(
         <Modal defaultOpen={true} basic size='small'>
         <Header icon='lock' content='Login to View Favorites' />
         <Modal.Content>
         </Modal.Content>
         <Modal.Actions>
            <Button color='yellow' inverted
            onClick={() => this.props.history.push(`/login`)}>
               <Icon name='user' /> LOGIN
            </Button>
            <Button color='green' inverted
            onClick={() => this.props.history.push(`/signup`)}>
               <Icon name='user plus icon' /> SIGN UP
            </Button>
         </Modal.Actions>
       </Modal>
      )
   }
} 

export default withRouter(SignUpLogIn);