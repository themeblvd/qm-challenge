import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSessions } from '../store/sessions';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
    const { getSessions, params } = this.props;
    getSessions(params);
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
        <TransitionGroup className="fields">
          {params.map((param, index) => {
            return (
              <CSSTransition key={`search-param-${index}`} timeout={250} classNames="shift">
                <SearchParam index={index} isLast={index === params.length - 1} {...param} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
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
