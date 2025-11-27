import styled from 'styled-components';

export const StyledPrimaryButton = styled.button`
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
        color: ${(props) => props.theme.colors.textHoverPrimary};
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

export const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    height: 700px;
    margin: 15px 50px;
    padding: 25px;
    background-color: ${(props) => props.theme.colors.contentBackground};
    color: ${(props) => props.theme.colors.textPrimary};
`;

export const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    border-radius: 15px;
    margin: 0 50px;
    padding: 25px 15px;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.contentBackground};
    color: ${(props) => props.theme.colors.textPrimary};
`;

export const StyledFormDiv = styled.div`
    margin-right: 50px;
`;

export const StyledInput = styled.input`
    outline: none;
    border: none;
    font-size: 16px;
    padding: 5px;
    margin-left: 10px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textPrimary};
    transition: 0.3s ease;
`;

export const StyledSelect = styled.select`
    outline: none;
    border: none;
    font-size: 16px;
    padding: 5px;
    margin-left: 10px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textPrimary};
    cursor: pointer;
    transition: 0.3s ease;
`;

export const StyledLi = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 2px 0;
`;
export const StyledH2 = styled.h2`
    font-size: 14px;
    flex-basis: 18%;
    white-space: nowrap;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export const StyledNumber = styled.span`
    display: inline-block;
    width: 30px;
`;

export const StyledP = styled.p`
    font-size: 14px;
    flex-basis: 15%;
    flex-shrink: 1;
    flex-grow: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-width: 0;
`;

export const StyledDelDiv = styled.div`
    display: flex;
    border-radius: 15px;
    flex-basis: 100%;
    padding: 25px 15px;
    background-color: ${(props) => props.theme.colors.contentBackground};
    color: ${(props) => props.theme.colors.textPrimary};
`;

export const StyledHeaderLi = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 2px 0;
    font-weight: bold;
    border-bottom: 2px solid ${(props) => props.theme.colors.background};
    padding-bottom: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
`;

export const StyledTable = styled.table`
    width: calc(100% - 100px);
    border-collapse: collapse;
    border-radius: 15px;
    margin: 15px 50px;
    padding: 25px;
    background-color: ${(props) => props.theme.colors.contentBackground};
    color: ${(props) => props.theme.colors.textPrimary};
    display: block;
    height: 700px;
    overflow-y: auto;
`;

export const StyledTableWrapper = styled.div`
    border-radius: 15px;
    margin: 15px 50px;
    padding: 25px;
    background-color: ${(props) => props.theme.colors.contentBackground};
    color: ${(props) => props.theme.colors.textPrimary};
    height: 700px;
    overflow-y: auto;
`;

export const StyledTableInner = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const StyledTableHeader = styled.thead`
    font-weight: bold;
    border-bottom: 2px solid ${(props) => props.theme.colors.background};
`;

export const StyledTableHeaderCell = styled.th`
    text-align: left;
    padding: 10px 5px;
    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
`;

export const StyledTableBody = styled.tbody``;

export const StyledTableRow = styled.tr`
    margin: 2px 0;
`;

export const StyledTableCell = styled.td`
    padding: 10px 5px;
    font-size: 14px;
    vertical-align: top;
`;
