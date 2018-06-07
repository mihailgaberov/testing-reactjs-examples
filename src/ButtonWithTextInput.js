import React from "react";
import PropTypes from 'prop-types';

import {
    CustomButton,
    CustomTextInput,
} from "./elements";

class ButtonWithTextInput extends React.Component {
    state = {
        textInputValue: this.props.textInputValue
    };

    dummyMethod = () => 3 + 5;
    setNewCityName = (name) => this.setState({ textInputValue: 'Santa Maria' });

    /** Showing an example of internal implementation of the click handler
     * that we should not care about when testing it as long as the results
     * are what we expect. 
    */
    onClick = () => {
        // Inner implemtation of the Some other methods might be here ...
        this.dummyMethod();
        this.setNewCityName('Santa Maria');
    }

    render() {
        const { btnLabel } = this.props;
        const { textInputValue } = this.state;

        return (
            <div>
                <CustomTextInput textInputValue={textInputValue} />
                <CustomButton btnLabel={btnLabel} clickHandler={this.onClick} />
            </div>
        );
    }
}

ButtonWithTextInput.propTypes = {
    btnLabel: PropTypes.string.isRequired,
    textInputValue: PropTypes.string.isRequired,
};

export default ButtonWithTextInput;