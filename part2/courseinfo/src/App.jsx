const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part }) => (
	<p>
		{part.name} {part.exercise}
	</p>
);

const Content = ({ parts }) => {
	/** Error handling if there are no parts in the course. */
	if (!parts.part) return <p>no part available</p>;
	return parts.map((part, index) => <Part part={part} key={index} />);
};

const TotalExercise = ({ parts }) => {
	/** if total exercises of part is 0 */
	if (!parts)
		return (
			<p>
				<strong>total of 0 exercises</strong>
			</p>
		);
	const total = parts.reduce((sum, part) => sum + part.exercise, 0);
	return (
		<p>
			<strong>total of {total} exercises</strong>
		</p>
	);
};

const Course = ({ course }) => {
	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<TotalExercise parts={course.parts} />
		</div>
	);
};
const App = () => {
	const course = {
		id: 1,
		name: "Half Stack application development",
		parts: [
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
		],
	};
	return <Course course={course} />;
};

export default App;
