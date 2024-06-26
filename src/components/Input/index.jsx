import P from 'prop-types';

import './styles.css';

export const Input = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      placeholder="Type your search"
      type="search"
      onChange={handleChange}
      value={searchValue}
    />
  );
};

Input.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
