import { useState } from "react";

const Header = ({ text }) => <h2>{text}</h2>;
const Button = ({ click, text }) => <button onClick={click}>{text}</button>;
const Statistics = ({ clicks }) => {
	const totalClick = Object.values(clicks).reduce((total, click) => total + click, 0);
	const averageClick = totalClick !== 0 ? (clicks.good - clicks.bad) / totalClick : 0;
	const positiveFeedback = clicks.good !== 0 ? (clicks.good / totalClick) * 100 : 0;
	if (!totalClick) {
		return <p>No feedback given</p>;
	}

	return (
		<div>
			<Header text="statistics" />
			<table style={{ border: "none" }}>
				<StatisticsLine text="good" value={clicks.good} />
				<StatisticsLine text="neutral" value={clicks.neutral} />
				<StatisticsLine text="bad" value={clicks.bad} />
				<StatisticsLine text="all" value={totalClick} />
				<StatisticsLine text="average" value={averageClick} />
				<StatisticsLine text="positive" value={`${positiveFeedback} %`} />
			</table>
		</div>
	);
};

const StatisticsLine = ({ text, value }) => {
	return (
		<tbody>
			<tr>
				<td>{text}</td>
				<td>{value}</td>
			</tr>
		</tbody>
	);
};

const App = () => {
	const [prevClicks, setClick] = useState({ good: 0, neutral: 0, bad: 0 });
	const incrementGoodClick = () => setClick({ ...prevClicks, good: prevClicks.good + 1 });
	const incrementNeutralClick = () => setClick({ ...prevClicks, neutral: prevClicks.neutral + 1 });
	const incrementBadClick = () => setClick({ ...prevClicks, bad: prevClicks.bad + 1 });
	return (
		<div>
			<Header text="give feedback" />
			<Button click={incrementGoodClick} text="good" />
			<Button click={incrementNeutralClick} text="neutral" />
			<Button click={incrementBadClick} text="bad" />
			<Statistics clicks={prevClicks} />
		</div>
	);
};

export default App;
