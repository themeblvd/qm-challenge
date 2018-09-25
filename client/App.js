import React, { Component } from 'react';
import './assets/scss/main.scss'; // Must come before components.
import { connect } from 'react-redux';
import { getSessions } from './store/sessions';

/**
 * Top-Level Application.
 */
class App extends Component {
  /**
   * Fetch "sessions" from the database, when the
   * component mounts.
   *
   * Note: In our example app, this will simply just
   * be a string, representing an SQL query, opposed
   * to an actual object of retrieved user sessions.
   */
  componentDidMount() {
    this.props.getSessions();
  }

  /**
   * Render component.
   *
   * @return {Component}
   */
  render() {
    const { sessions } = this.props;

    return (
      <div className="app">
        <p>@TODO</p>
      </div>
    );
  }
}

export default connect(
  state => ({ sessions: state.sessions }), // Lack of brevity for clarity, could be `({ ...state })`.
  { getSessions }
)(App);
