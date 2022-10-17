import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';
import {fetchStream,editStream} from '../../actions';

class StreamEdit extends Component{

  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit=(formValues)=>{
      console.log(this.props.match.params.id)
      this.props.editStream(this.props.match.params.id,formValues)
  }
  render(){
    if (!this.props.stream){
      return null;
    }
    return (
    <div>
      <h3>StreamEdit</h3>
      <StreamForm initialValues={_.pick(this.props.stream,'title','description')} onSubmit={this.onSubmit}/>
    </div>
       );
  }
 
}

const mapStateToProps = (state,ownProps)=>{
  return {stream:state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit);
