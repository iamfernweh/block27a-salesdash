import { mockTransactions } from '../Data';

export default function Transactions() {
    return (
        <>
            <h2>
                {mockTransactions.length}{''} Transactions
            </h2>
        </>
    );
}