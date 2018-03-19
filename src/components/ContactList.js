import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { transitions } from '../lib/style-utils';

const Wrapper = styled.div`
    margin-top: 1rem;

    .contact-enter {
        animation: ${transitions.stretchOut} .15s linear;
        animation-fill-mode: forwards;
    }

    .contact-leave {
        animation: ${transitions.shrinkIn} .15s linear;
        animation-fill-mode: forwards;
    }

`;

class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object),
        search: PropTypes.string,
        onToggleFavorite: PropTypes.func,
        onOpenModify: PropTypes.func
    }

    render() {
        const { contacts, onToggleFavorite, onOpenModify, search } = this.props;
        const contactList = contacts
            .filter(
                c => c.name.indexOf(search) !== -1
            ).sort(
                (a,b) => {
                    if(a.name > b.name) return 1;
                    if(a.name < b.name) return -1;
                    return 0;
                }
            )
            .map(
            // contact => <div key={contact.id}>{JSON.stringify(contact)}</div>
            contact => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    onToggleFavorite={onToggleFavorite}
                    onOpenModify={onOpenModify}
                />
            )
        );
        return (
            <Wrapper>
                 <CSSTransitionGroup
                        transitionName="contact"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                {contactList}
                </CSSTransitionGroup>
            </Wrapper>
        )
    }
}

export default ContactList;