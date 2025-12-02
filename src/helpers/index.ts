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

    @media (max-width: 768px) {
        width: 100%;
        padding: 12px;
        font-size: 14px;
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

    @media (max-width: 768px) {
        padding: 6px 8px;
        margin: 0 3px;
        font-size: 12px;
    }

    @media (max-width: 480px) {
        padding: 5px 6px;
        margin: 0 2px;
        font-size: 11px;
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
    height: calc(100vh - 200px);
    min-height: 700px;
    margin: 15px 50px;
    padding: 25px;
    background-color: ${(props) => props.theme.colors.contentBackground};
    color: ${(props) => props.theme.colors.textPrimary};
    overflow-y: auto;

    @media (max-width: 1024px) {
        height: calc(100vh - 180px);
        min-height: 600px;
    }

    @media (max-width: 768px) {
        margin: 15px 20px;
        padding: 15px;
        height: calc(100vh - 160px);
        min-height: 400px;
        max-height: 600px;
    }

    @media (max-width: 480px) {
        margin: 10px;
        padding: 10px;
        height: calc(100vh - 140px);
        min-height: 300px;
        max-height: 500px;
    }

    @media (max-width: 360px) {
        height: calc(100vh - 120px);
        min-height: 250px;
        max-height: 450px;
    }
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

    @media (max-width: 768px) {
        margin: 0 20px;
        padding: 15px 10px;
        flex-direction: column;
        align-items: stretch;
    }

    @media (max-width: 480px) {
        margin: 0 10px;
        padding: 10px;
    }
`;

export const StyledFormDiv = styled.div`
    margin-right: 50px;

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 15px;
        width: 100%;
    }
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

    @media (max-width: 768px) {
        font-size: 14px;
        margin-left: 0;
        margin-top: 5px;
        width: 100%;
    }
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

    @media (max-width: 768px) {
        font-size: 14px;
        margin-left: 0;
        margin-top: 5px;
        width: 100%;
    }
`;

export const StyledLi = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    margin: 2px 0;
    gap: 15px;
    width: 100%;

    @media (max-width: 768px) {
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 10px;
    }
`;

export const StyledLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    color: ${(props) => props.theme.colors.textPrimary};

    @media (max-width: 768px) {
        font-size: 13px;
        width: 100%;
    }
`;
export const StyledH2 = styled.h2`
    font-size: 14px;
    flex: 1 1 0;
    min-width: 150px;
    white-space: nowrap;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
        flex-basis: 100%;
        min-width: 0;
        font-size: 12px;
    }

    @media (max-width: 480px) {
        font-size: 11px;
        white-space: normal;
    }
`;

export const StyledNumber = styled.span`
    display: inline-block;
    width: 30px;
`;

export const StyledP = styled.p`
    font-size: 14px;
    flex: 0 0 auto;
    width: 180px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 768px) {
        flex-basis: 100%;
        width: auto;
        white-space: normal;
        font-size: 12px;
    }

    @media (max-width: 480px) {
        font-size: 11px;
    }
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
    align-items: center;
    flex-wrap: nowrap;
    margin: 2px 0;
    font-weight: bold;
    border-bottom: 2px solid ${(props) => props.theme.colors.background};
    padding-bottom: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
    gap: 15px;
    width: 100%;

    @media (max-width: 768px) {
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 10px;
    }
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
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    @media (max-width: 768px) {
        margin: 15px 20px;
        padding: 15px;
        height: auto;
        min-height: 400px;
        max-height: 600px;
        overflow-x: auto;
    }

    @media (max-width: 480px) {
        margin: 10px;
        padding: 10px;
        overflow-x: auto;
    }
`;

export const StyledTableInner = styled.table`
    width: 100%;
    border-collapse: collapse;
    table-layout: auto;

    @media (max-width: 768px) {
        min-width: 500px;
        table-layout: fixed;
    }

    @media (max-width: 480px) {
        min-width: 100%;
        table-layout: fixed;
    }
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
    min-width: 80px;

    @media (max-width: 768px) {
        padding: 8px 4px;
        font-size: 12px;
        min-width: 60px;
        white-space: normal;
    }

    @media (max-width: 480px) {
        padding: 6px 3px;
        font-size: 10px;
        white-space: normal;
        min-width: 50px;
    }
`;

export const StyledTableBody = styled.tbody``;

export const StyledTableRow = styled.tr`
    margin: 2px 0;
`;

export const StyledTableCell = styled.td`
    padding: 10px 5px;
    font-size: 14px;
    vertical-align: top;
    white-space: nowrap;
    min-width: 80px;
    max-width: none;

    @media (max-width: 768px) {
        padding: 8px 4px;
        font-size: 12px;
        min-width: 60px;
        white-space: normal;
        word-wrap: break-word;
        max-width: 100%;
    }

    @media (max-width: 480px) {
        padding: 6px 3px;
        font-size: 10px;
        min-width: 50px;
    }
`;
