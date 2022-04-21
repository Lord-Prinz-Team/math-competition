import Heading from "../components/Heading";
import classes from "./Visualization.module.scss";

const Visualization = () => {
	return (
		<section className={classes.visualization}>
			<header className={`${classes.heading} u-center-text u-margin-bottom-medium`}>
				<Heading isAnimated={true} size="2" style={{ color: "#ddd" }}>
					Wizualizacja
				</Heading>
			</header>
		</section>
	);
};

export default Visualization;
