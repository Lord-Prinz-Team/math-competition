import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import classes from "./About.module.scss";
import mechanizm from "./../assets/img/mechanizm.jpg";
import Button from "../components/Button";

const About = (props) => {
	return (
		<section id="about" className={classes.about}>
			<header className={`${classes.heading} u-center-text u-margin-bottom-big`}>
				<Heading isAnimated={true} size="2">
					Czym jest mechanizm z Antykithiry?
				</Heading>
			</header>

			<div className={classes["flex-container"]}>
				<div className={classes.text}>
					<Heading className="u-margin-bottom-small" size="3">
						Lorem ipsum dolor sit amet
					</Heading>
					<Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus
						sapien odio, ac scelerisque diam hendrerit nec. Maecenas tincidunt felis nec
						lacus porttitor luctus. Nullam lacinia luctus eros, nec iaculis sem rutrum id.
						Pellentesque rutrum odio sed urna condimentum facilisis. Phasellus molestie sit
						amet odio tristique fringilla. Nullam erat ex.
					</Paragraph>

					<Heading className="u-margin-bottom-small" size="3">
						Lorem ipsum dolor sit amet
					</Heading>
					<Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus
						sapien odio, ac scelerisque diam hendrerit nec. Maecenas tincidunt felis nec
						lacus porttitor luctus. Nullam lacinia luctus eros, nec iaculis sem rutrum id.
						Pellentesque rutrum odio sed urna condimentum facilisis. Phasellus molestie sit
						amet odio tristique fringilla. Nullam erat ex.
					</Paragraph>
					<Button target="#origin">Pochodzenie &rarr;</Button>
				</div>
				<div className={classes["image-container"]}>
					<img src={mechanizm} className={classes.image} />
				</div>
			</div>
		</section>
	);
};
export default About;
