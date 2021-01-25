import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg)
  }
`;
export const Container = styled.div`
    margin: 64px 0px;
`;
export const Title = styled.h1`
    margin: 24px 8px;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: #60d761;
`;
export const GridContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    ${(props) =>
        props.loading &&
        css`
            svg {
                animation: ${rotate} 2s infinite;
            }
        `}
`;
export const Grid = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
    grid-gap: 32px 72px;
    margin-bottom: 72px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 450px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ItemGrind = styled.div`
    h1 {
        margin: 4px 0px;
        font-size: 16px;
        color: #ffffff;
    }
    p {
        font-size: 14px;
        color: #c4c4c4;
    }
    img {
        background: #c4c4c4;
        height: 200px;
        width: 200px;
    }
`;
