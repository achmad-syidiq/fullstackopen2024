const Header = ({ course }) => <h3>{course}</h3>;

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => {
	/** Error handling if there are no parts in the course. */
	if (!parts.length) return <p>no part available</p>;
	return parts.map((part) => <Part part={part} key={part.id} />);
};

const TotalExercise = ({ parts }) => {
	const total = parts?.reduce((sum, part) => sum + part.exercises, 0) ?? 0;
	return <p><strong>total of {total} exercises</strong></p>
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

const Courses = ({ courses }) => {
	return courses.map((course, id) => <Course key={id} course={course} />);
};

export default Courses;
