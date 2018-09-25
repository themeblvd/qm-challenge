import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addParam } from '../store/sessions';
import SearchParam from './SearchParam';

/**
 * Search form.
 */
class SearchForm extends Component {
  /**
   * Handle form submission.
   *
   * @param {Event} event
   */
  handleSubmit = event => {
    event.preventDefault();
    // ... @TODO
  };

  /**
   * Render component.
   *
   * @return {Component}
   */
  render() {
    const { params, results, addParam } = this.props;

    return (
      <form name="post" onSubmit={this.handleSubmit}>
        {params.map((param, index) => {
          return <SearchParam key={`search-param-${index}`} index={index} {...param} />;
        })}
        <button onClick={addParam}>And</button>
        {results && <p className="search-results">{results}</p>}
        <button>Search</button>
      </form>
    );
  }
}

export default connect(
  state => ({ ...state.sessions }),
  { addParam }
)(SearchForm);
