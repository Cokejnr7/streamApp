import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';


class StreamList extends React.Component{

  //fetches list of stream
  componentDidMount(){
    this.props.fetchStreams()
  }

  //CRUD -[EDIT|DELETE] renders edit or delete button 
  renderAdmin(id){
    return (
      <div className='right floated content'>
        <Link to={`/streams/edit/${id}`} className='ui button primary'>Edit</Link>
        <Link to={`/streams/delete/${id}`} className='ui button negative'>Delete</Link>
      </div>
    )
  }

  renderCreate(){
    if(this.props.isSignedIn){
      return(
        <div style={{textAlign:'right'}}>
       <Link to="/streams/new/" className='ui button violet'>
        Create Stream
       </Link>
       </div>
      )
    }
  }

  renderList(){
    return this.props.streams.map(stream =>{
      return <div className='item' key={stream.id}>
          {/*checks if current user is the stream creator and renders button if true*/}
          {(stream.userId === this.props.id) && this.renderAdmin(stream.id) }
          <i className='large middle aligned camera icon'/>
          <div className='content'>
            {stream.title}
            <div className='description'>{stream.description}</div>
          </div>
      </div>
    })
  }

  render(){
    return ( 
    <div>
      <h2>Streams</h2>
      <div className='ui celled list'>
        {this.renderList()}
      </div>
      {this.renderCreate()}
    </div>);
  } 

};

const mapStateToProps = state =>{
  return {
    streams: Object.values(state.streams),
    id: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }

};

export default connect(mapStateToProps,{fetchStreams})(StreamList);
