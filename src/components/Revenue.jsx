import { mockTransactions } from '../Data';

export default function Revenue() {
    const totalRevenue = mockTransactions
        .reduce((total, curTrans) => total + parseFloat(curTrans.cost), 0)
        .toFixed(2);

    return (
        <>
            <h2>

                Revenue generated: <span className='currency'>$</span>{totalRevenue}
            </h2>
        </>
    );
}