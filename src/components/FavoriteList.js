import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FavoriteItem from './FavoriteItem';

const Wrapper = styled.div`
    /* 레이아웃 */
    position: relative; /* 자식 컴포넌트의 크기를 이 컴포넌트의 50% 로 설정하기 위함 */
    display: flex;
    flex-wrap: wrap; /* 공간이 부족하면 다음 줄에 보여줌 */
`;
class FavoriteList extends Component {
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
                c => c.favorite === true
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
                <FavoriteItem
                    key={contact.id}
                    contact={contact}
                    onToggleFavorite={onToggleFavorite}
                    onOpenModify={onOpenModify}
                />
            )
        );
        return (
            <Wrapper>
                {contactList}
            </Wrapper>
        )
    }
}

export default FavoriteList;