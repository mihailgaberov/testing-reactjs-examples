import React from 'react';
import PropTypes from 'prop-types';

import './CustomTextInput.css';

const CustomTextInput = ({textInputValue}) => <input type="text" className="custom-text-input" name="action-txt" readOnly value={textInputValue} />

CustomTextInput.propTypes = {
    textInputValue: PropTypes.string.isRequired,
};

export default CustomTextInput;