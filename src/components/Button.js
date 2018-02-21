import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const Button = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    flex: 1;
    display: inline-block;

    cursor: pointer;
    text-align: center;
    font-weight: 500;
    font-size: 1.2rem;
    transition: all .3s;

    color: white;
    background: ${props => oc[props.color][7]};

    &:hover {
        background: ${props => oc[props.color][6]};
    }

    &:active {
        background: ${props => oc[props.color][8]};
    }
`;

Button.propType = {
    color: PropTypes.string
};

export default Button;