import Heading from "../components/Heading";
import classes from "./About.module.scss";

const About = (props) => {
	return (
		<section id="about" className={classes.about}>
			<Heading isAnimated={true} size="2" className={classes.heading}>
				Czym jest machina z Antykithiry?
			</Heading>
		</section>
	);
};
export default About;
