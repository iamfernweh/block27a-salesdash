import { mockTransactions } from '../Data';

export default function Transactions() {
    return (
        <>
            <h2>
                Transactions: {mockTransactions.length}{''}
            </h2>
        </>
    );
}