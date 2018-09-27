import React from 'react';

/**
 * Individual select control.
 *
 * This is our fake field to simulate the experience
 * of a <select> menu.
 *
 * @param {Object}   props              Component properties.
 * @param {string}   props.field        Type of field - `name` or `reducer`.
 * @param {Array}    props.options      Options to select from.
 * @param {string}   props.value        Current selected value.
 * @param {Function} props.handleChange Handle updating value when user selects value.
 */
const SelectControl = props => {
  const { field, options, value, handleChange } = props;

  const selected = options.find(option => option.id === value);

  return (
    <div className="field select">
      <span className="label">{selected ? selected.label : 'Select Field'}</span>
      <ul className="options">
        {options.map(option => {
          const { id, label } = option;
          return (
            <li key={`${field}-option-${id}`}>
              <a href="#" onClick={e => handleChange(e, field, id)}>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectControl;
