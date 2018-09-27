import React, { Component } from 'react';
import './assets/scss/main.scss';
import SearchForm from './components/SearchForm';

const App = () => {
  return (
    <div className="app">
      <h1 className="page-title">Search For Sessions</h1>
      <SearchForm />
    </div>
  );
};

export default App;
