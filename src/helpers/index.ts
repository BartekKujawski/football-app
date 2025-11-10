import styled from 'styled-components';

export const StyledMainButton = styled.button`
    border: 1px solid ${(props) => props.theme.colors.primary};
    padding: 10px 15px;
    transition: 0.3s;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};

    &:hover {
        background-color: ${(props) => props.theme.colors.primary};
        color: white;
    }
`;

export const StyledButton = styled.button`
    border: none;
    padding: 5px 10px;
    margin: 0 5px;
    transition: 0.3s;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textPrimary};

    &:hover {
        color: white;
    }
`;

export const StyledNegButton = styled.button`
    border: 1px solid red;
    padding: 5px 10px;
    transition: 0.3s;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
    background-color: transparent;
    color: red;

    &:hover {
        background-color: red;
        color: black;
    }
`;

export const StyledNegButton2 = styled.button`
    border: none;
    margin: 0 5px;
    padding: 5px 10px;
    transition: 0.3s;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
    background-color: rgba(255, 0, 0, 0.2);
    color: red;

    &:disabled {
        cursor: not-allowed;
    }
`;
