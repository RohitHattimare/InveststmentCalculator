import "./ResultTable.css";

//To make number 2 digits using international formatter
const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});
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
                            <tr key={ydata.year}>
                                <td>{ydata.year}</td>
                                <td>{ydata.savingsEndOfYear.toFixed(2)}</td>
                                <td>{formatter.format(ydata.yearlyInterest)}</td>
                                <td>
                                    {formatter.format(ydata.savingsEndOfYear -
                                        initSave -
                                        ydata.yearlyContribution * ydata.year)}

                                </td>
                                <td>{formatter.format(initSave + ydata.yearlyContribution * ydata.year)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ResultTable;
