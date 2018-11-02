import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../state/actions';
import { Link, Redirect } from 'react-router-dom'
import { push } from 'connected-react-router'

class App extends Component {
  
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.props.history.push('/' + event.target.value)
  }
  
  render() {
    return (
      <div>
        <input type="text" value={this.props.router.location.pathname.substring(1)} onChange={this.handleChange} />
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