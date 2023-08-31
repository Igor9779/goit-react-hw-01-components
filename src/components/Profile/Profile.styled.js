import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  background-color: lightgray;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5%;
  padding: 20px;
  margin-bottom: 20px;
`;

export const Photo = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const Tag = styled.p`
  background-color: #f2f2f2;
  color: #666;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
`;

export const Country = styled.p`
  font-size: 16px;
  color: #999;
  font-weight: bold;
`;

export const List = styled.ul`
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 10px 0;
`;

export const StyledSpan = styled.span`
  font-weight: bold;
  color: #ff6600;
`;

export const StyledSpanText = styled.span`
  font-weight: bold;
  color: #524a4d8b;
`;
