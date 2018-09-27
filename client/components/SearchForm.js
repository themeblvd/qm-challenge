import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSessions, reset } from '../store/sessions';
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
   * Reset the sessions state, clearing
   * search params and results query.
   *
   * @param {Event} event
   */
  reset = event => {
    event.preventDefault();
    this.props.reset();
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
        <button onClick={this.reset}>Reset</button>
      </form>
    );
  }
}

export default connect(
  state => ({ ...state.sessions }),
  { getSessions, reset }
)(SearchForm);
