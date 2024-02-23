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
                        <TableCell align="left">Transaction Id</TableCell>
                        <TableCell align="left">User</TableCell>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Cost&nbsp;($)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mockTransactions.map((transaction) => (
                        <TableRow
                            key={transaction.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">{transaction.txId}</TableCell>
                            <TableCell align="left">{transaction.user}</TableCell>
                            <TableCell align="left">{transaction.date}</TableCell>
                            <TableCell align="left">{transaction.cost}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
