import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import PropTypes from 'prop-types';

const RemoveButton = styled.div`
    /* 레이아웃 */
    position: absolute;
    right: 1rem;
    top: 1rem;

    /* 색상 */
    color: ${oc.gray[6]};

    /* 기타 */
    cursor: pointer;
    font-size: 2rem;

    /* 마우스 커서 위에 있을 때 */
    &:hover {
        color: ${oc.red[6]};
    }
    /* 마우스 커서 클릭 시 */
    &:active {
        color: ${oc.red[7]}
    }

    ${props => !props.visible && 'display: none;'}
`

RemoveButton.propTypes = {
    visible: PropTypes.bool
}

export default RemoveButton;