import { calculateInvestmentResults, formatter } from '../util/investment';

const getTotalInterest = (results, endIndex) => {
	let totalInterest = 0;
	for(let index = 0; index < results.length; index++) {
		totalInterest += results[index].interest;
		if(index >= endIndex) return totalInterest;
	}
	return totalInterest;
};

const formatNumber = formatter.format;

function ResultsTable({ input }) {
	const results = calculateInvestmentResults(input);
	const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;

	return (
	<table id='result'>
		<thead>
			<tr>
				<th>Year</th>
				<th>Investment Value</th>
				<th>Interest (Year)</th>
				<th>Total Interest</th>
				<th>Invested Capital</th>
			</tr>
		</thead>
		<tbody>
			{results.map((yearData, index) => {
				const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
				const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

				return (
				<tr key={'resultTable' + index}>
					<td>{yearData.year}</td>
					<td>{formatNumber(yearData.valueEndOfYear)}</td>
					<td>{formatNumber(yearData.interest)}</td>
					<td>{formatNumber(totalInterest)}</td>
					<td>{formatNumber(totalAmountInvested)}</td>
				</tr>
			)})}
		</tbody>
	</table>
	);
};

export default ResultsTable;
