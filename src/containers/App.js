import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../state/actions';
import { Link } from 'react-router-dom'

class App extends Component {
  
  handleClick = () => {
    this.props.history.push('/newthing');  
  }
  
  render() {
    return (
      <div>
        <button onClick={this.props.setTest} >console.log(actions);</button>
        <button onClick={this.props.setTest} >console.log(actions);</button>
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
  setTest: bindActionCreators(actions.setTest, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);