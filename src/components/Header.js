import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    /*layout*/
    height: 4rem;
    background: ${oc.teal[2]};
    border-bottom: 1px solid ${oc.teal[4]}
    /*font*/
    color: white;
    font-weight: 500;
    font-size: 1.5rem;
    /*align center*/
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Header = () => (
    <Wrapper>
        Address book
    </Wrapper>
);

export default Header;