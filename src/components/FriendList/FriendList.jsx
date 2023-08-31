import PropTypes from 'prop-types'
import { Avatar, List, ListItem, Name, StyleSpan, StyledFriendList } from './FriendList.styled'

export const FriendList = ({friends}) => {
    return (
    <StyledFriendList>
        <List>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <ListItem key={id}>
                    <StyleSpan $isOnline={isOnline}>
                        {isOnline?'Online':'Offline'}
                    </StyleSpan>
                    <Avatar src={avatar} alt={name} width="48" />
                    <Name>{name}</Name>
                </ListItem>
                )
            )}
        </List>
    </StyledFriendList>

)
}

FriendList.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}