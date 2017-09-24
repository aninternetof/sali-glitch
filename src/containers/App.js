import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../state/actions';

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.setTest} >console.log(actions);</button>
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