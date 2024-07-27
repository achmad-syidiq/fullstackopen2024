import Courses from "./Courses";
import Title from "./Title";

const App = () => {
	const title = "Web development curriculum"
	const courses = [
		{
			name: "Half Stack application development",
			id: 1,
			parts: [
				{
					name: "Fundamentals of React",
					exercises: 10,
				},
				{
					name: "Using props to pass data",
					exercises: 7,
				},
				{
					name: "State of a component",
					exercises: 14,
				},
			],
		},
		{
			name: "Node.js",
			id: 2,
			parts: [
				{
					name: "Routing",
					exercises: 3,
					id: 1,
				},
				{
					name: "Middlewares",
					exercises: 7,
					id: 2,
				},
			],
		},
	];
	return (
		<div>
			<Title text={title} />
			<Courses courses={courses} />
		</div>
	)

};

export default App;
