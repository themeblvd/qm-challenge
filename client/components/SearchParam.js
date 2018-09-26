import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addParam, updateParam, removeParam } from '../store/sessions';
import { names, stringReducers, numberReducers } from '../utils/options';
import SelectControl from './SelectControl';
import TextControl from './TextControl';
import RangeControl from './RangeControl';

/**
 * Dynamic search parameter row added by user.
 *
 * These are mapped from <SearchForm />.
 */
class SearchParam extends Component {
  /**
   * Handle removing a field row.
   *
   * @param {Event} event
   */
  handleRemove = event => {
    const { removeParam, index } = this.props;
    event.preventDefault(); // Prevent <button> from submitting form.
    if (index > 0) {
      removeParam(index);
    }
  };

  /**
   * Handle selection of fake <select> menu.
   *
   * @param {Event}  event
   * @param {string} field Field within param row being altered, `name` or `reducer`.
   * @param {string} value Cooresponding value for this field.
   */
  handleSelect = (event, field, value) => {
    const { updateParam, index } = this.props;
    event.preventDefault();
    updateParam(index, 'value', ''); // Reset value when changing name or reducer.
    updateParam(index, field, value);
  };

  /**
   * Handle change in standard text value.
   *
   * @param {Event} event
   */
  handleText = event => {
    const { updateParam, index } = this.props;
    updateParam(index, 'value', event.target.value);
  };

  /**
   * Handle change in range.
   *
   * @param {Event} event
   */
  handleRange = event => {
    const { value, updateParam, index } = this.props;
    const newValue = value ? value : { min: 0, max: 0 };

    const range =
      event.target.name === 'min'
        ? { ...newValue, min: event.target.value }
        : { ...newValue, max: event.target.value };

    updateParam(index, 'value', range); // @TODO Should validate if proper range values.
  };

  /**
   * Render component.
   *
   * @return {Component}
   */
  render() {
    const { index, name, reducer, value, handleSelect, isLast, addParam } = this.props;

    const selectedName = names.find(nameOption => nameOption.id === name);

    const reducers =
      selectedName && selectedName.type === 'string' ? stringReducers : numberReducers;

    const prefix = selectedName && selectedName.type === 'number' ? 'is' : '';

    return (
      <div className="row">
        <div className="wrap">
          <div className="field remove">
            <button onClick={this.handleRemove} className={index === 0 ? 'inactive' : 'active'}>
              Remove
            </button>
          </div>
          <SelectControl
            field="name"
            options={names}
            value={name}
            handleChange={this.handleSelect}
          />
          {name && (
            <Fragment>
              {prefix && <span className="helper">{prefix}</span>}
              <SelectControl
                field="reducer"
                options={reducers}
                value={reducer}
                handleChange={this.handleSelect}
              />
              {reducer === 'range' ? (
                <RangeControl value={value} handleChange={this.handleRange} />
              ) : (
                <TextControl
                  type={selectedName.type === 'string' ? 'text' : 'number'}
                  value={value}
                  handleChange={this.handleText}
                />
              )}
            </Fragment>
          )}
        </div>
        {isLast && <button onClick={addParam}>Add Search Parameter</button>}
      </div>
    );
  }
}

export default connect(
  null,
  { addParam, updateParam, removeParam }
)(SearchParam);
