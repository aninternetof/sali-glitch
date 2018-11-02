import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../state/actions';
import { Link, Redirect } from 'react-router-dom'
import { push } from 'connected-react-router'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = { toDashboard: false };
  }
  
  
  
  render() {
    if (this.state.toDashboard === true) {
          return <Redirect to='/dashboard' />
    }
    return (
      <div>
        <button onClick={this.props.setTest} >console.log(actions);</button>
        <button onClick={() => {this.props.navigate('/home')}} >Go</button>
        <button onClick={() => {this.setState(() => ({toDashboard: true}))}}>Redirect</button>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

App.propTypes = {
  
};

const mapStateToProps = (state={}) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  setTest: bindActionCreators(actions.setTest, dispatch),
  navigate: bindActionCreators(push, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);