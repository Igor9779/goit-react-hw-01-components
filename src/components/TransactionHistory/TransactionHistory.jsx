import PropTypes from 'prop-types'
import { StyledTable, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
    return (
        <StyledTable>
<TableHead>
    <tr>
    <TableHeaderCell>Type</TableHeaderCell>
    <TableHeaderCell>Amount</TableHeaderCell>
    <TableHeaderCell>Currency</TableHeaderCell>
    </tr>
</TableHead>

<TableBody>
    {items.map(({ id, type, amount, currency }) => {
        return (
        <TableRow key={id}>
                <TableCell>{type}</TableCell>
                <TableCell>{amount}</TableCell>
                <TableCell>{currency}</TableCell>
    </TableRow>
    )
})
}
</TableBody>
</StyledTable>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired).isRequired
}