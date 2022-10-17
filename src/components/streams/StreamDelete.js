import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream,deleteStream } from '../../actions';
import Modal from '../Modal';


class StreamDelete extends React.Component{

  componentDidMount(){
      this.props.fetchStream(this.props.match.params.id);
  }
  renderContent(){
    return (this.props.stream)? `Are you sure you want to delete ${this.props.stream.title}?` 
    : "Are you sure you want to delete this stream?";
  }
  renderActions(){
  const {id} = this.props.match.params;
  return (
    <>
      <button className="ui button negative" onClick={()=>this.props.deleteStream(id)}>Delete</button>
      <Link to="/" className="ui button">Cancel</Link>
    </>
    )
  }

  render(){
  return (
  <div>
    <Modal title="Delete Stream" content={this.renderContent()} actions={this.renderActions()}/>
  </div>
    )}
};

const mapStateToProps = (state,ownProps)=>{
  return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete);
