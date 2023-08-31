import styled from 'styled-components';

export const Section = styled.section`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Percentage = styled.span`
  color: #ff6600;
`;