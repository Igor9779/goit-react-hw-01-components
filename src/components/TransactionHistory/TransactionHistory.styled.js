import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
  font-weight: bold;
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const TableBody = styled.tbody`
  text-align: center;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f7f7f7;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;