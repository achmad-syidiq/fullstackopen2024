const Header = ({ course }) => <h1>{course}</h1>;
const Total = ({ sum }) => <p>Number of exercises {sum}</p>;
const Part = ({ part }) => (
	<p>
		{part.name} {part.exercise}
	</p>
);

const Content = ({ parts }) => (
	<>
		<Part part={parts[0]} />
		<Part part={parts[1]} />
		<Part part={parts[2]} />
	</>
);

const App = () => {
	const course = "Half Stack application development";
	const parts = [
		{
			name: "Fundamentals of React",
			exercise: 10,
		},
		{
			name: "Using props to pass data",
			exercise: 7,
		},
		{
			name: "State of a component",
			exercise: 14,
		},
	];

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total sum={parts[0].exercise + parts[1].exercise + parts[2].exercise} />
		</div>
	);
};

export default App;