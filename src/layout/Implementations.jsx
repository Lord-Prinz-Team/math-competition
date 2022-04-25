import Heading from "../components/Heading";
import Wave from "../components/Wave";
import classes from "./Implementations.module.scss";
import implementations from "./../assets/data/implementacja.json";
import Implementation from "../components/Implementation";

const Implementations = () => {
	return (
		<section className={classes.implementations} id="implementations">
			<Wave className={classes.wave} />
			<header className={`${classes.heading} u-center-text u-margin-bottom-big`}>
				<Heading isAnimated={true} size="2">
					Implementacje
				</Heading>
			</header>
			<div className={classes.implementation__container}>
				{implementations.map((implementation, index) => {
					return (
						<Implementation
							key={index}
							index={index}
							img={implementation.img}
							title={implementation.title}
							text={implementation.text}
						/>
					);
				})}
			</div>
		</section>
	);
};
// https://www.pcworld.pl/news/Najstarszy-komputer-swiata-odtworzony-z-klockow-Lego-Dziala-wideo,364983.html
export default Implementations;
