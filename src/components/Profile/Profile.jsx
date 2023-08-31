import PropTypes from 'prop-types'
import { Container, Country, List, ListItem, Name, Photo, StyledSpan, StyledSpanText, Tag } from './Profile.styled'

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <Container>
            <div>
                <Photo src={avatar} alt={username} width="300" />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Country>{location}</Country>
            </div>
            <List>
                <ListItem>
                    <StyledSpanText>Followers: </StyledSpanText>
                    <StyledSpan>{stats.followers}</StyledSpan>
                </ListItem>
                <ListItem>
                    <StyledSpanText>Views: </StyledSpanText>
                    <StyledSpan>{stats.views}</StyledSpan>
                </ListItem>
                <ListItem>
                    <StyledSpanText>Likes: </StyledSpanText>
                    <StyledSpan>{stats.likes}</StyledSpan>
                </ListItem>
            </List>
        </Container>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}