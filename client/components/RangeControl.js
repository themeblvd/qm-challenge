import React from 'react';

/**
 * Individual range control.
 *
 * Note: This is only used for the value of a search
 * parameter.
 *
 * @param {Object}   props              Component properties.
 * @param {number}   props.min          Current selected min value.
 * @param {number}   props.max          Current selected max value.
 * @param {Function} props.handleChange Handle updating value when user selects value.
 */
const RangeControl = props => {
  const { value, handleChange } = props;
  const min = value.min ? value.min : '';
  const max = value.max ? value.max : '';

  return (
    <div className="field range">
      <input type="number" value={min} name="min" onChange={handleChange} />
      <span className="field-helper">and</span>
      <input type="number" value={max} name="max" onChange={handleChange} />
    </div>
  );
};

export default RangeControl;
