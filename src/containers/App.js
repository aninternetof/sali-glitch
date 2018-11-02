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
      <div className="container">
        <h1>Is </h1>
        <input className="input" type="text" value={this.props.router.location.pathname.substring(1)} onChange={this.handleChange} />
        <h1>high in salicylates?</h1>
        <div className="results">
          <table>
            <tbody>
              {this.props.searchResults.results.map((result, count) =>
                <tr key={Math.random()}>
                  {let classes = `rating${result.rating} result${count}`}
                  <td className=`{"rating"+result.rating}`>
                    {this.ratingToText(result.rating)}
                  </td>    
                  <td>
                    {result.name}
                  </td> 
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <p>This application has not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
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