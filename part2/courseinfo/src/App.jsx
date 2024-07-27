const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part }) => (
	<p>
		{part.name} {part.exercise}
	</p>
);

const Content = ({ parts }) => {
	return parts.map((part, index) => <Part part={part} key={index} />);
};

const Course = ({ course }) => {
	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
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