import React, { Component } from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import {media, transitions} from '../lib/style-utils';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    /*layout*/
    position: fixed;

    /*align center*/
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /*layer*/
    z-index: 10;

    /*width (basic: 400px)*/
    width: ${ props => props.width };

    ${media.mobile`
        width: calc(100% - 2rem);
    `}

    .modal-enter {
        animation: ${transitions.slideDown} .5s ease-in-out;
        animation-fill-mode: forwards;
    }

    .modal-leave {
        animation: ${transitions.slideUp} .5s ease-in-out;
        animation-fill-mode: forwards;
    }
`;

Wrapper.propTypes = {
    width: PropTypes.string
};

const ModalBox = styled.div`
    background: white;
    border: 1px solid rgba(0,0,0,0,3);
`;

class Modal extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        onHide: PropTypes.func,
        width: PropTypes.string
    }

    static defaultProps = {
        width: '400px'
    }

    handleClickOutside = (e) => {
        const { visible, onHide } = this.props;

        if(!visible) return null;
        onHide();
    }

    handleKeyUp = (e) => {
        const { onHide } = this.props;
        if (e.keyCode === 27) {
            onHide();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // when the value of visible is changing
        if(prevProps.visible !== this.props.visible) {
            if(this.props.visible){
                document.body.addEventListener('keyup', this.handleKeyPress);
            }else{
                document.body.removeEventListener('keyup', this.handleKeyPress);
            }
        }
    }

    render() {
        const {visible, children, width} = this.props;

        return (
            <div>
                <Wrapper width={width}>
                    <CSSTransitionGroup
                        transitionName="modal"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                    {
                        visible && (<ModalBox>{children}</ModalBox>)
                    }
                    </CSSTransitionGroup>
                </Wrapper>
            </div>
        )
    }
}

// use onClickOutside Library
export default onClickOutside(Modal);