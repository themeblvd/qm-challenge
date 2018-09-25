import React from 'react';

/**
 * Individual text control.
 *
 * Note: This is only used for the value of a search
 * parameter.
 *
 * @param {Object}   props              Component properties.
 * @param {Object}   props.min          Current selected min value.
 * @param {Object}   props.max          Current selected max value.
 * @param {Function} props.handleChange Handle updating value when user selects value.
 */
const RangeControl = props => {
  const { value, handleChange } = props;
  const min = value.min ? value.min : '';
  const max = value.max ? value.max : '';

  return (
    <div className="field range">
      <input type="number" value={min} name="min" onChange={handleChange} />
      <span className="helper">and</span>
      <input type="number" value={max} name="max" onChange={handleChange} />
    </div>
  );
};

export default RangeControl;
