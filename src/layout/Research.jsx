import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Wave from "../components/Wave";
import classes from "./Research.module.scss";

const Research = () => {
	return (
		<section className={classes.research} id="research">
			<Wave className={classes.wave} />

			<header className={`${classes.heading} u-center-text u-margin-bottom-small`}>
				<Heading isAnimated={true} size="2">
					Badania Naukowe
				</Heading>
			</header>

			<div className={classes.container}>
				<Heading size="3" className={`${classes["heading--1"]} u-margin-bottom-small`}>
					Początki
				</Heading>
				<Paragraph className={`${classes["paragraph--1"]} u-margin-bottom-medium`}>Mechanizm został zbadany przez dyrektora greckiego Narodowego Muzeum Numizmatycznego - Ioannisowi  Svoronosowi oraz filologowi Adolphowi Wilhelmowi z Austriackiego Instytutu Archeologicznego w Atenach. 
				Wilhelm  na podstawie analizy inskrypcji uznał, że przyrząd powstał między II wiekiem n.p.e. a II wiekiem n.e.
				Svoronosowi przy pomocy mikroskopa udało się odczytać 220 greckich liter i dostrzegł wyryte na mechaniźmie znaki zodiaku.
				</Paragraph>
				<Heading size="3" className={`${classes["heading--2"]} u-margin-bottom-small`}>
					Rozkodowywanie
				</Heading>
				<Paragraph className={`${classes["paragraph--2"]} u-margin-bottom-medium`}>
					W 1907 mechanizm zaczał badać niemiecki filolog Albert Rehm. W międzyczasie eksponat został nieco odczyszczony, co pozwoliło badaczowi odczytać więcej napisów.
					Odcyfrował m.in. nazwę jednego z miesięcy używanego w kalendarzu greckim. Na tej podstawie Rehm uznał, że przyrząd był pewnego rodzaju astronimicznym kalkulatorem.
					W latach 20 XX  Ioannis Theofanidis poświęcił dekadę aby poczas niej odczytać 350 kolejnych liter, odkrył podziałkę na jednej z części, stwierdził, że mniejsze koła były uruchamiane przez większe, całość mechanizmu była wprawiana w ruch za pomocą korby. 

				</Paragraph>
			
			<Heading size="3" className={`${classes["heading--3"]} u-margin-bottom-small`}>
					Astronomiczny aspekt
				</Heading>
				<Paragraph className={`${classes["paragraph--3"]} u-margin-bottom-medium`}>
					Do wznowienia badań doszło w latach 50 XX. wieku. Matematyk Yale Derek de Solla Price uzyskał zgodę na osobisty ogląd eksponatu. Price analizował fragmenty mechanizmu pod mikroskopem. Z matematykiem współpracował grecki epigrafik George Stamires i poszerzył ona gamę odczytanych liter aż do 800.
					Badacze ustalili, że mechanizm był niewielki, płaski i przechowywany w drewnianej skrzynce. Urządzenie na przodzie miało dużą tarczę, za nią zaś były umieszczone dwie kolejne. W górnej części tarczy Stamires odczytał słowo Chelai, czyli szczypce. Tak starożytni grecy nazywali ówczesną konstelację Wagi. Na lewo odcyfrował dwuliterowy fragment no, który uznał za część słowa Parthenos, czyli konstelację Panny. W ten sposób udało się potwierdzić przypuszczenie wcześniejszych badaczy, że urządzenie pokazywało znaki zodiaku i związane z nimi konstelacje. Na zewnętrznej części tarczy zaznaczono 12 miesięcy, liczących po 30 dni, z 365-dniowego roku. Wskazówka na wewnętrznej tarczy pokazywała drogę Słońca na tle gwiazd, a zewnętrzna skala podawała aktualną datę. Różnicę wynikającą z czasu obrotu Ziemi dookoła Słońca wynoszącą 365 i jedną czwartą dnia można było usunąć ręcznie przestawiając tarczę co cztery lata.
					Z kolei z tyłu urządzenia znajdowały się dwie tarcze, ułożone jedna na drugiej, podzielone na segmenty liczące około 6 stopni i pokryte inskrypcjami. Solla Price i Stamires uznali, że pokazywały one cykliczne zmiany położenia Księżyca i Słońca.
				</Paragraph>

				<Heading size="3" className={`${classes["heading--4"]} u-margin-bottom-small`}>
					Badania rentgenem
				</Heading>

			</div>
			<Wave className={classes["wave--1"]} />
		</section>
	);
};

export default Research;
