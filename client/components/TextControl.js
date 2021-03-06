import React from 'react';

/**
 * Individual text control.
 *
 * Note: This is only used for the value of a search
 * parameter.
 *
 * @param {Object}   props              Component properties.
 * @param {string}   props.type         Input type, `text` or `number`.
 * @param {string}   props.value        Current selected value.
 * @param {Function} props.handleChange Handle updating value when user selects value.
 */
const TextControl = props => {
  const { type, value, handleChange } = props;

  return (
    <div className="field text">
      <input type={type} value={value} onChange={handleChange} />
    </div>
  );
};

export default TextControl;
