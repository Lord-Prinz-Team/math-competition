import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import classes from "./Construction.module.scss";
import mechanizm from "./../assets/img/mechanizm--4.png";

const Construction = () => {
	return (
		<section className={classes.construction} id="construction">
			<header className={`${classes.heading} u-center-text u-margin-bottom-medium`}>
				<Heading isAnimated={true} size="2" style={{ color: "#ddd" }}>
					Budowa mechanizmu
				</Heading>
			</header>
			<div className={classes.container}>
				<Heading
					size="3"
					style={{ color: "#ddd", fontSize: "2.5rem" }}
					className={`${classes["heading--1"]} `}
				>
					Dane techniczne
				</Heading>
				<Paragraph
					className={`${classes.paragraph} ${classes["text--1"]} u-margin-bottom-medium`}
				>
					Mechanizm złożony jest z 37 kół zębatych z brązu, o średnicy od 1 cm do 17 cm.
					Ilość zębów na każdym kole było liczbą pierwszą. Koła były napędzane za pomocą
					korby z boku. Urządzenie mierzyło jedynie 33 cm wysokości, 17 cm szerokości i 9
					cm głębokości. Było zawieszone na drwenianej ramie. Na tarczach mechanizmu były
					wyryte liczne inskrypcje.
				</Paragraph>
				<img src={mechanizm} className={classes["img--1"]} />

				<Heading
					size="3"
					style={{ color: "#ddd", fontSize: "2.5rem" }}
					className={`${classes["heading--2"]} `}
				>
					Działanie
				</Heading>
				<Paragraph
					className={`${classes.paragraph} ${classes["text--2"]} u-margin-bottom-medium`}
				>
					Tarcza umieszczona z przodu pokazywała ruch Słońca, Księżyca i planet na tle
					zodiaku oraz kalendarza egipskiego z uwzględnieniem roku przestępnego. Mechanizm
					potrafił również obliczyć dzień, w którym wystpąpi zaćmienie Księżyca.
					Urządzenie było tak dokładne, że potrafiło również odtworzyć takie szczegóły,
					jak nierównomierny ruch księżyca na niebie. Ten starożytny komputer pozwalał
					przewidywać momenty wschodów i zachodów ważniejszych dla Greków gwiazd i
					gwiazdozbiorów oraz pozycję niektórych gwiazd.
				</Paragraph>

				{/* <header
					className={`${classes["heading--3"]} u-center-text u-margin-bottom-big`}
				>
					<Heading
						size="2"
						style={{ color: "#ddd" }}
						className={` u-center-text u-margin-bottom-big`}
						isAnimated={true}
					>
						Wizualizacja
					</Heading>

					<div className={`${classes.paralax} u-margin-bottom-big`}>
						<div className={classes["element--1"]}>
							<div className={classes["title--1"]}></div>
							<img src={visualisation} className={classes["paralax_img--1"]} />
							<img src={arrow} className={classes["arrow--1"]} />
							<div className={classes["caption--1"]}>Cykl planetarny</div>
						</div>
					</div>
				</header> */}
			</div>
		</section>
	);
};

export default Construction;
