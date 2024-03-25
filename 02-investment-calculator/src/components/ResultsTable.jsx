import { formatter } from '../util/investment';

const getTotalInterest = (results, endIndex) => {
	let totalInterest = 0;
	for(let index = 0; index < results.length; index++) {
		totalInterest += results[index].interest;
		if(index >= endIndex) return totalInterest;
	}
	return totalInterest;
};

function ResultsTable({ results }) {
	const formatNumber = formatter.format;
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
			{results.map((result, index) => (
				<tr key={'resultTable' + index}>
					<td>{result.year}</td>
					<td>{formatNumber(result.valueEndOfYear)}</td>
					<td>{formatNumber(result.interest)}</td>
					<td>{formatNumber(getTotalInterest(results, index))}</td>
					<td>{formatNumber(result.valueEndOfYear - getTotalInterest(results, index))}</td>
				</tr>
			))}
		</tbody>
	</table>
	);
};

export default ResultsTable;
