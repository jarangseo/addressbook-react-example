import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Modal from './Modal';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import Input from './Input';
import Button from './Button';
import RemoveIcon from 'react-icons/lib/md/remove-circle';
import RemoveButton from './RemoveButton';

const ThumbnailWrapper = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    justify-content: center;
    background: white;
`;

const Form = styled.div`
    padding: 1rem;
    background: ${oc.gray[0]};
`;

const ButtonWrapper = styled.div`
    display: flex;
`;

class ContactModal extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        mode: PropTypes.oneOf(['create', 'modify']),
        name: PropTypes.string,
        phone: PropTypes.string,
        color: PropTypes.string,
        onHide: PropTypes.func,
        onAction: PropTypes.func,
        onRemove: PropTypes.func
    }

    handleChange = (e) => {
        const { onChange } = this.props;
        onChange({
            name: e.target.name,
            value: e.target.value
        });
    }

    render() {
        const {handleChange} = this;
        const {
            visible,
            mode,
            name,
            phone,
            color,
            onHide,
            onAction,
            onRemove
        } = this.props;

        return (
            <Modal visible={visible} onHide={onHide}>
                <ThumbnailWrapper>
                    <RemoveButton
                        visible={mode==='modify'}
                        onClick={onRemove}>
                            <RemoveIcon/>
                    </RemoveButton>
                    <Thumbnail size="4rem" color={color}/>
                </ThumbnailWrapper>
                <Form>
                    <Input
                        name="name"
                        placeholder="이름"
                        value={name}
                        onChange={handleChange}
                    />
                    <Input
                        name="phone"
                        placeholder="전화번호"
                        value={phone}
                        onChange={handleChange}
                    />
                    <Input
                        name="etc"
                        placeholder="비고"
                        onChange={handleChange}
                    />
                </Form>
                <ButtonWrapper>
                    <Button color="teal"
                        onClick={onAction}>
                        { mode === 'create' ? '추가' : '수정' }
                    </Button>
                    <Button color="gray"
                        onClick={onHide}>
                        취소
                    </Button>
                </ButtonWrapper>
            </Modal>
        );
    }
};

export default ContactModal;