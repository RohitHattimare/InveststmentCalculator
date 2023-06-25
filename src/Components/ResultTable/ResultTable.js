import './ResultTable.css';
const ResultTable = (props) => {
    const initSave = props.initSave;

    return (
        <div>
            <table className="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Total Savings</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((ydata) => {
                        return (
                            < tr >
                                <td>{ydata.year}</td>
                                <td>{ydata.savingsEndOfYear}</td>
                                <td>{ydata.yearlyInterest}</td>
                                <td>{ydata.savingsEndOfYear - initSave - ydata.yearlyContribution * ydata.year}</td>
                                <td>{initSave + ydata.yearlyContribution * ydata.year}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    );
}

export default ResultTable;