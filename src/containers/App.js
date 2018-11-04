import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../state/actions';
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
  
  componentWillUpdate() {
    
  }
  
  ratingToText(rating) {
    if (rating < 2) {
      return "negligible";
    } else if (rating < 4) {
      return "low";
    } else if (rating < 6) {
      return "medium"
    } else if (rating < 8) {
      return "high"
    } else {
      return "very high"
    }
  }
  
  ratingToColor(rating) {
    if (rating < 3) {
      return "rgba(245, 222, 179, 0.2)";
    } else if (rating < 5) {
      return "rgba(0, 255, 0, 0.2)";
    } else if (rating < 7) {
      return "rgba(255, 255, 0, 0.2)";
    } else if (rating < 9) {
      return "rgba(255, 0, 0, 0.2)";
    } else {
      return "rgba(255, 0, 255, 0.2)";
    }
  }
  
  getResults(props) {
    if (props.searchResults.isFetching) {
      return <p>Loading...</p>
    } else if (props.searchResults.results.length === 0) {
      document.body.style.backgroundColor = "white";
      return <p></p>
    } else {
      document.body.style.backgroundColor = this.ratingToColor(props.searchResults.results[0].rating);
      return (
        <table>
          <tbody>
            {this.props.searchResults.results.map((result, count) =>
              <tr key={Math.random()}>
                <td className={`rating${result.rating} result${count}`}>
                  {this.ratingToText(result.rating)}
                </td>    
                <td className={`result${count}`}>
                  {result.name}
                </td> 
              </tr>
            )}
          </tbody>
        </table>
      )
    }
  }
  
  render() {
    return (
      <div className="container">
        <h1>Is </h1>
        <input className="input" type="text" value={this.props.router.location.pathname.substring(1)} onChange={this.handleChange} />
        <h1>high in salicylates?</h1>
        <div className="results">
          {this.getResults(this.props)}
        </div>
        <p>This application has not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          The data source is <a href="https://atpscience.com/salicylate-foods-sensitivity-intolerances-and-food-list/">just stuff on the internet</a>.</p>
        <p>Questions? <a href="https://twitter.com/aninternetof">Message me on Twitter.</a></p>
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