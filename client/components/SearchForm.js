import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSessions } from '../store/sessions';
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
    this.props.getSessions();
  };

  /**
   * Render component.
   *
   * @return {Component}
   */
  render() {
    const { params, results } = this.props;

    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <div className="fields">
          {params.map((param, index) => {
            return (
              <SearchParam
                key={`search-param-${index}`}
                index={index}
                isLast={index === params.length - 1}
                {...param}
              />
            );
          })}
        </div>
        {results && <p className="search-results">{results}</p>}
        <button className="button-primary">Search</button>
      </form>
    );
  }
}

export default connect(
  state => ({ ...state.sessions }),
  { getSessions }
)(SearchForm);
