import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../state/actions';
import { Link } from 'react-router-dom'
import { push } from 'connected-react-router'

class App extends Component {
  
  handleClick(event) {
     this.props.navigate('/home');
  }
  
  render() {
    return (
      <div>
        <button onClick={this.props.setTest} >console.log(actions);</button>
        <button onClick={this.handleClick} >Go</button>
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