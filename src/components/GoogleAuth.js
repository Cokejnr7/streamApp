import React from 'react';
import { connect } from 'react-redux';
import { signIn,signOut } from '../actions';
import {CLIENT_ID} from '../keys';
class GoogleAuth extends React.Component {

  componentDidMount() {

    //load up the client library from the google api
    try{
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: CLIENT_ID,
          scope: "email",
          plugin_name: "streamy",
      }).then(()=>{
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }
  catch(err){
    console.log(err)
  }
  }

  onAuthChange = (isSignedIn)=>{
    isSignedIn? this.props.signIn(this.auth.currentUser.get().getId()): this.props.signOut();
  }
  
  renderButton = (status)=>{
    if (status === null){
      return null;
    }
    else if(status){
     return <button onClick={this.auth.signOut} className="ui red google button"><i className="google icon" />Sign out</button>
    }
    else{
     return <button onClick={this.auth.signIn} className="ui red google button"><i className="google icon" />Sign in with Google</button>
    }

  }

  render() {

    return <div>{this.renderButton(this.props.isSignedIn)}</div>;
  }
}

const mapStateToProps = ({auth})=>{
    return auth
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);
