import React, { Component } from 'react';
import './assets/scss/main.scss';
import { connect } from 'react-redux';
import { getSessions } from './store/sessions';
import SearchForm from './components/SearchForm';

/**
 * Top-Level Application.
 */
const App = () => {
  return (
    <div className="app">
      <h1 className="page-title">Search For Sessions</h1>
      <SearchForm />
    </div>
  );
};

export default App;
