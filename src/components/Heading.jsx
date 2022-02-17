import classes from "./Heading.module.scss";

const Heading = (props) => {
	const content = props.children;
	const size = props.size ?? 1;

	if (size < 1 || size > 6) {
		throw new Error("Invalid size!");
	}

	switch (size) {
		case 1:
			return (
				<h1
					style={props.style}
					className={`${classes.heading} ${classes["heading--1"]} ${props.className}`}
				>
					{content}
				</h1>
			);
		case 2:
			return (
				<h2
					style={props.style}
					className={`${classes.heading} ${classes["heading--2"]} ${props.className}`}
				>
					{content}
				</h2>
			);
		case 3:
			return (
				<h3
					style={props.style}
					className={`${classes.heading} ${classes["heading--3"]} ${props.className}`}
				>
					{content}
				</h3>
			);
		case 4:
			return (
				<h4
					style={props.style}
					className={`${classes.heading} ${classes["heading--4"]} ${props.className}`}
				>
					{content}
				</h4>
			);
		case 5:
			return (
				<h5
					style={props.style}
					className={`${classes.heading} ${classes["heading--5"]} ${props.className}`}
				>
					{content}
				</h5>
			);
		case 6:
			return (
				<h6
					style={props.style}
					className={`${classes.heading} ${classes["heading--6"]} ${props.className}`}
				>
					{content}
				</h6>
			);
		default:
			throw new Error("Unknown heading size!");
	}
};

export default Heading;
