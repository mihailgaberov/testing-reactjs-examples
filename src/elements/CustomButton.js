import React from 'react';
import PropTypes from 'prop-types';

import './CustomButton.css'

const CustomButton = ({btnLabel, clickHandler}) => {
  return <button type="button" name="action-btn" className="custom-btn" onClick={clickHandler}>{btnLabel}</button>;
}

CustomButton.propTypes = {
    btnLabel: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
};

export default CustomButton;