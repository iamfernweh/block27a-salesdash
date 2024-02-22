import { mockTransactions } from '../Data';

export default function Heading() {
    return (
        <>
            <h1>Recent Transactions</h1>
            <table>
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>User</th>
                        <th>Date</th>
                        <th>Cost ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {mockTransactions.map((transaction, index) => (
                        <tr key={transaction.txId + index}>
                            <td>{transaction.txId}</td>
                            <td>{transaction.user}</td>
                            <td>{transaction.date}</td>
                            <td>{transaction.cost}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}