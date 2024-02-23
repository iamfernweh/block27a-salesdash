import { mockTransactions } from '../Data';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Heading() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <h3>Transaction History</h3>
                    <TableRow>
                        <TableCell align="right">Transaction Id</TableCell>
                        <TableCell align="right">User</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Cost&nbsp;($)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mockTransactions.map((transaction) => (
                        <TableRow
                            key={transaction.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right">{transaction.txId}</TableCell>
                            <TableCell align="right">{transaction.user}</TableCell>
                            <TableCell align="right">{transaction.date}</TableCell>
                            <TableCell align="right">{transaction.cost}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
