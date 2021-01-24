import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 32px;
`;

export const Title = styled.h1`
    margin: 16px 8px;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: #60d761;
`;

export const FiltersGroup = styled.div`
    display: flex;
`;
export const Form = styled.form`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    input {
        background: #23262b;
        border-radius: 8px;
        border: solid 1px #c4c4c4;
        padding: 8px 16px;
        font-size: 16px;
        color: #c4c4c4;
        margin: 0 16px;
    }
`;

export const Select = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    flex: 1;
    background: #23262b;
    border-radius: 8px;
    border: solid 1px #c4c4c4;
    padding: 8px 16px;
    font-size: 16px;
    color: #c4c4c4;
    margin: 0 16px;
`;
