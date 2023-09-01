import PropTypes from 'prop-types'
import { Label, List, ListItem, Percentage, Section, Title } from './Statistics.styled'

export const Statistics = ({title, stats}) => {
    return (
        <Section>
            {title && <Title>{title}</Title>}
            <List>
                {stats.map(({ id, label, percentage }) => {
                return (
                    <ListItem
                    key={id}>
                        <Label>{label}</Label>
                        <Percentage>{percentage}</Percentage>
                    </ListItem>
                )
                })}
            </List>
        </Section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired).isRequired
}