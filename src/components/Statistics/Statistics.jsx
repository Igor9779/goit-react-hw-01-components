import PropTypes from 'prop-types'
import { Label, List, ListItem, Percentage, Section, Title } from './Statistics.styled'

export const Statistics = ({title, stats}) => {
    return (
        <Section>
            <Title>{title}</Title>

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
    // title: PropTypes.string.isRequired,
    // id: PropTypes.string.isRequired,
    label: PropTypes.string,
    percentage: PropTypes.number,
}