import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../state/actions';
import { Link, Redirect } from 'react-router-dom'
import { push } from 'connected-react-router'

class App extends Component {
  
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    const { search } = this.props;
    search(this.props.router.location.pathname.substring(1));
  }
  
  handleChange(event) {
    const { search } = this.props;
    search(event.target.value);
    this.props.history.push('/' + event.target.value)
  }
  
  ratingToText(rating) {
    if (rating < 3) {
      return "negligible";
    } else if (rating < 5) {
      return "low";
    } else if (rating < 7) {
      return "medium"
    } else if (rating < 9) {
      return "high"
    } else {
      return "very high"
    }
  }
  
  render() {
    return (
      <div>
        
        <input type="text" value={this.props.router.location.pathname.substring(1)} onChange={this.handleChange} />
        <ul>
          {this.props.searchResults.results.map((result) =>
            <li key={Math.random()}>
              {this.ratingToText(result.rating)}, {result.name}
            </li>
          )}
    </ul>
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
  search: bindActionCreators(search, dispatch),
  navigate: bindActionCreators(push, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);