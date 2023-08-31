import styled from 'styled-components';

export const StyledFriendList = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  gap: 10px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;
export const StyleSpan = styled.span`
font-weight: bold;
border-radius: 50%;
font-size: 16px;
color: ${props => (props.$isOnline ? '#008000' : '#ff3300')};
` 
export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 20px;
`;
