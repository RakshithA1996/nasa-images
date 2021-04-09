import styled from 'styled-components';

export const BannerWrap = styled.div`
    padding: 0 14rem;
    color: #ffffff;

    .imageOfDay {
        width: 100%;
        height: 600px
    }

    .imageOfDayText {
        text-align: right;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    .titleDiv {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 1rem;
        font-size: 1.4rem;
        font-weight: 600;
        color: #ff5757;
    }
    .explanation {
        margin-top: 1rem;
        font-size: 1rem;
        line-height: 150%;
        text-align: justify;
    }
    .copyright {
        width: 100%;
        font-size: 0.75rem;
        text-align: right;
        margin-top: 0.8rem;
    }
`;