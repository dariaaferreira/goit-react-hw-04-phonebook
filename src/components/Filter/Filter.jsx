import React from 'react';
import PropTypes from 'prop-types';

import { LabelContacts, Input } from './Filter.styled';

const Filter = ({ filter, onFilterChange }) => (
  <LabelContacts>
    Find contacts by name
    <Input type="text" value={filter} onChange={onFilterChange} />
  </LabelContacts>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
