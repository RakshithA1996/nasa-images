import styled from 'styled-components';

export const HeadWrap = styled.div`
    width: 100%;
    position: fixed;
    top:0;
    z-index: 1;
    padding: 1.6rem 0;
    background: #000000;
    border-bottom:1px solid #3b3b3b;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;

    .logo {
        width: 130px;
        height: auto;
        margin-left: 14rem;
    }

    .searchIcon {
        color: #ff5757;
        margin-right: 14rem;
        font-size: 1.2rem;
    }
`;