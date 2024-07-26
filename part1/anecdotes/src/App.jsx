import { useState } from "react";

const anecdotes = [
	"If it hurts, do it more often.",
	"Adding manpower to a late software project makes it later!",
	"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
	"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
	"Premature optimization is the root of all evil.",
	"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
	"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
	"The only way to go fast, is to go well.",
];

const voteInitial = anecdotes.reduce((obj, key) => ({ ...obj, [key]: 0 }), {});

const Header = ({ text }) => <h2>{text}</h2>;
const VoteDisplay = ({ vote, total }) => {
	return (
		<div>
			<div>{vote}</div>
			<div>has {total} votes</div>
		</div>
	);
};

const Button = ({ event, text }) => <button onClick={event}>{text}</button>;

const App = () => {
	const [selected, setSelected] = useState(0);
	const [votes, setVotes] = useState(voteInitial);
	const totalVotes = votes[anecdotes[selected]];
	const mostVotes = Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b));

	const handleNextAnecdote = () => {
		let randomIndex = selected;
		while (randomIndex === selected) {
			randomIndex = Math.floor(Math.random() * anecdotes.length);
		}
		return setSelected(randomIndex);
	};
  const handleVoteAnecdote = () => {
    const selectedAnecdote = anecdotes[selected];
    const updatedVotes = { ...votes, [selectedAnecdote]: votes[selectedAnecdote] + 1 };
    setVotes(updatedVotes);
  };

	return (
		<div>
			<Header text="Anecdote of the day" />
			<VoteDisplay vote={anecdotes[selected]} total={totalVotes} />
			<Button event={handleVoteAnecdote} text="vote" />
			<Button event={handleNextAnecdote} text="Next anecdotes" />
			<Header text="Anecdote with most votes" />
			<VoteDisplay vote={mostVotes} total={votes[mostVotes]} />
		</div>
	);
};

export default App;
