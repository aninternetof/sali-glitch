import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../state/actions';
import { Link, Redirect } from 'react-router-dom'
import { push } from 'connected-react-router'

class App extends Component {
  
  constructor(props){
    super(props);
    console.log("in constructor");
    this.state = { toDashboard: false };
  }

  render() {
    if (this.state.toDashboard === true) {
          this.setState(() => ({toDashboard: false}));
          return <Redirect to='/dashboard' />
    }
    return (
      <div>
        <h1>{this.props.router.location.pathname}</h1>
        <button onClick={() => {this.setState(() => ({toDashboard: true}))}}>Redirect</button>
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