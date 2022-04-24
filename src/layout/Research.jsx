import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Wave from "../components/Wave";
import classes from "./Research.module.scss";

const Research = () => {
	return (
		<section className={classes.research} id="research">
			<Wave className={classes.wave} />

			<header className={`${classes.heading} u-center-text u-margin-bottom-big`}>
				<Heading isAnimated={true} size="2">
					Badania Naukowe
				</Heading>
			</header>

			<div className={classes.container}>
				<Heading size="3" className={classes["heading--1"]}>
					Początki
				</Heading>
				<Paragraph></Paragraph>
			</div>
			<Wave className={classes["wave--1"]} />
		</section>
	);
};

export default Research;
