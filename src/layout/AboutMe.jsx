import Button from "../components/Button";
import Heading from "../components/Heading";
import Logo from "../components/Logo";
import Paragraph from "../components/Paragraph";
import Wave from "../components/Wave";
import classes from "./AboutMe.module.scss";
const AboutMe = () => {
	return (
		<section className={classes.aboutMe}>
			<Logo color="blue" />
			<div className={classes.text}>
				<header className={`${classes.heading} u-margin-bottom-medium`}>
					<Heading size={2} isAnimated={true}>
						O Autorze
					</Heading>
				</header>
				<Paragraph className={`${classes.paragraph} "u-margin-bottom-big`}>
					Nazywam się Oskar Płaziński, mam 18 lat. Chodzę do Technikum nr 1 w Gliwicach.
					Jestem w klasie 3 programistycznej. Uwielbiam programować i grać na pianinie.
					Moim ulubionym językiem programowania jest Typescript / JavaScript. Bardzo
					często używam tych języków do tworzenia aplikacji internetowych, serwerów,
					botów, aplikacji mobilnych oraz aplikacji desktopowych. Chciałbym się dalej
					rozwijać i nabierać doświadczenia w tej branży.
				</Paragraph>
				<Heading className="u-margin-bottom-small" size="3">
					Dlaczego Mechanizm z Antykithiry?
				</Heading>
				<Paragraph>
					Wybrałem temat związany z Mechanizmem z Antykithiry, ponieważ myślę, że ta
					tematyka jest stosunkowo mało popularna, a tworząc tę stronę miałem na celu w
					sposób przystępny, kolorowy i ciekawy przedstawić koncept tego niezwykłego
					urządzenia.
				</Paragraph>
				<Button className={`${classes.btn}`} target="#technologies">
					Technologie &rarr;
				</Button>
			</div>
			<div className={classes.photo}>
				<div className={classes.image__cover}></div>
			</div>
			<Wave className={classes.wave} />
		</section>
	);
};

export default AboutMe;
