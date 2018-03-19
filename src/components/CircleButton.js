import React from 'react';
import styled, { css } from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const CircleButton = styled.div`
/* 레이아웃 */
height: 2rem;
width: 2rem;
display: flex;
align-items: center;
justify-content: center;
margin: 0.25rem;

/* 색상 */
background: white;
border: 1px solid ${oc.gray[4]};
color: ${oc.gray[4]};

/* 기타 */
border-radius: 1rem;
font-size: 1.15rem;

/* 마우스 커서가 위에 있을 때*/
&:hover {
    border: 1px solid ${oc.gray[7]};
    color: ${oc.gray[9]};
}

/* 즐겨찾기 - 노란색 */
${ props => props.favorite && css`
    /* active props 를 전달받으면 노란색으로 */
    ${props => props.active && css`
            border: 1px solid ${oc.yellow[6]};
        color: ${oc.yellow[6]};

        &:hover {
            color: ${oc.yellow[5]};
            border: 1px solid ${oc.yellow[5]};
        }
    `}

    &:active {
        border: 1px solid ${oc.yellow[6]};
        color: ${oc.yellow[6]};
    }
`}
`;

CircleButton.propTypes = {
    active: PropTypes.bool
};

export default CircleButton;