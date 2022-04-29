import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Wave from "../components/Wave";
import classes from "./Research.module.scss";
import rentgen from "./../assets/img/rentgen.jpg";
import czesci from "./../assets/img/mechanizm--czesci.png";
import t__1 from "./../assets/img/tomograf--1.png"
import t__2 from "./../assets/img/tomograf--2.png"
import t__3 from "./../assets/img/tomograf--3.png"
import t__4 from "./../assets/img/tomograf--4.png"
import t__5 from "./../assets/img/tomograf--5.png"
import t__6 from "./../assets/img/tomograf--6.png"
import t__7 from "./../assets/img/tomograf--7.png"
import t__8 from "./../assets/img/tomograf--8.png"
import t__9 from "./../assets/img/tomograf--9.png"
import t__10 from "./../assets/img/tomograf--.png"
import t__11 from "./../assets/img/tomograf--10.png"
import t__12 from "./../assets/img/tomograf--11.png"
import t__13 from "./../assets/img/tomograf--12.png"
import t__14 from "./../assets/img/tomograf--13.png"
import t__15 from "./../assets/img/tomograf--14.png"
import t__16 from "./../assets/img/tomograf--15.png"
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
				<div className={`${classes["paragraph--1"]} u-margin-bottom-big`}>
					<Paragraph>
						Mechanizm został zbadany przez dyrektora greckiego Narodowego Muzeum
						Numizmatycznego - Ioannisowi Svoronosowi oraz filologowi Adolphowi Wilhelmowi z
						Austriackiego Instytutu Archeologicznego w Atenach. Wilhelm na podstawie analizy
						inskrypcji uznał, że przyrząd powstał między II wiekiem n.p.e. a II wiekiem n.e.
						Svoronosowi przy pomocy mikroskopa udało się odczytać 220 greckich liter i
						dostrzegł wyryte na mechaniźmie znaki zodiaku.
					</Paragraph>
				
				</div>

				<Heading size="3" className={`${classes["heading--2"]} u-margin-bottom-small`}>
					Rozkodowywanie
				</Heading>
				<div className={`${classes["paragraph--2"]} u-margin-bottom-medium`}>
					<Paragraph>
						W 1907 mechanizm zaczał badać niemiecki filolog Albert Rehm. W międzyczasie
						eksponat został nieco odczyszczony, co pozwoliło badaczowi odczytać więcej
						napisów. Odcyfrował m.in. nazwę jednego z miesięcy używanego w kalendarzu
						greckim. Na tej podstawie Rehm uznał, że przyrząd był pewnego rodzaju
						astronimicznym kalkulatorem. W latach 20 XX Ioannis Theofanidis poświęcił dekadę
						aby poczas niej odczytać 350 kolejnych liter, odkrył podziałkę na jednej z
						części, stwierdził, że mniejsze koła były uruchamiane przez większe, całość
						mechanizmu była wprawiana w ruch za pomocą korby.
					</Paragraph>	<img src={czesci} className={classes.img} />
				</div>

				<Heading size="3" className={`${classes["heading--3"]} u-margin-bottom-small`}>
					Astronomiczny aspekt
				</Heading>
				<div className={`${classes["paragraph--3"]} u-margin-bottom-big`}>
					<Paragraph>
						Do wznowienia badań doszło w latach 50 XX. wieku. Matematyk Yale Derek de Solla
						Price uzyskał zgodę na osobisty ogląd eksponatu. Price analizował fragmenty
						mechanizmu pod mikroskopem. Z matematykiem współpracował grecki epigrafik George
						Stamires i poszerzył ona gamę odczytanych liter aż do 800. Badacze ustalili, że
						mechanizm był niewielki, płaski i przechowywany w drewnianej skrzynce.
						Urządzenie na przodzie miało dużą tarczę, za nią zaś były umieszczone dwie
						kolejne. W górnej części tarczy Stamires odczytał słowo Chelai, czyli szczypce.
						Tak starożytni grecy nazywali ówczesną konstelację Wagi. Na lewo odcyfrował
						dwuliterowy fragment no, który uznał za część słowa Parthenos, czyli konstelację
						Panny. W ten sposób udało się potwierdzić przypuszczenie wcześniejszych badaczy,
						że urządzenie pokazywało znaki zodiaku i związane z nimi konstelacje. Na
						zewnętrznej części tarczy zaznaczono 12 miesięcy, liczących po 30 dni, z
						365-dniowego roku. Wskazówka na wewnętrznej tarczy pokazywała drogę Słońca na
						tle gwiazd, a zewnętrzna skala podawała aktualną datę. Różnicę wynikającą z
						czasu obrotu Ziemi dookoła Słońca wynoszącą 365 i jedną czwartą dnia można było
						usunąć ręcznie przestawiając tarczę co cztery lata. Z kolei z tyłu urządzenia
						znajdowały się dwie tarcze, ułożone jedna na drugiej, podzielone na segmenty
						liczące około 6 stopni i pokryte inskrypcjami. Solla Price i Stamires uznali, że
						pokazywały one cykliczne zmiany położenia Księżyca i Słońca.
					</Paragraph>
				</div>

				<Heading size="3" className={`${classes["heading--4"]} u-margin-bottom-small`}>
					Badania rentgenowskie
				</Heading>
				<div className={`${classes["paragraph--4"]} u-margin-bottom-big`}>
					<Paragraph className={`${classes.paragraph}`}>
						Na początku lat 70 XX. wieku y brytyjski pisarz science-fiction Arthur C. Clarke
						zachęcił Price'a do wykorzystania w badaniach fotografii rentgenowskiej. W 1971
						roku przy pomocy przenośnego aparatu rentgenowskiego wykonano fotografie
						poszczególnych fragmentów mechanizmu. Dzięki zdjęciom Solla Price mógł dokładkie
						określić ile było wszystkich kół i tarcz, ile ząbków miała każda z nich oraz
						jakie było ich wzajemne położenie. Po badaniach Amerykanin zbudował model
						mechanizmu z Antykithiry. Znając liczbę kół, liczbę ich ząbków oraz ich
						rozpieszczenie, mógł ustalić, z jaką szybkością i o ile obracały się tarcze, a
						na tej podstawie wywnioskować, co mogły pokazywać.
					</Paragraph>
					<img src={rentgen} className={classes.image} alt={"Autor z mechanizmem"} />
				</div>

				<Heading size="3" className={`${classes["heading--5"]} u-margin-bottom-small`}>
					Badania tomograficzne
				</Heading>
				<div className={`${classes["paragraph--5"]} u-margin-bottom-big`}>
					<Paragraph>
						W latach 90. XX wieku eksponatem zajęli się kolejni dwaj badacze: Michael Wright
						z Muzeum Nauki w Londynie i Alane G. Bromley z Uniwersytetu w Sydney. Ponownie
						dokonali jego dokładnego oglądu, obfotografowali go rentgenowsko oraz
						przeprowadzili jego tomografię przy pomocy specjalnie skonstruowanego na
						potrzeby badań drogiego urządzenia. Ich zdaniem urządzanie służyło do
						odtwarzania ruchu Merkurego, Wenus, Marsa, Jowisza i Saturna. Mechanizm
						wskazywał też lata, na które przypadały igrzyska olimpijskie. W 2000 roku
						kolejne pokolenie badaczy wyposażone w jeszcze nowszy sprzęt przeprowadziła inne
						badania. Grupa amerykańskich naukowców i techników pod kierunkiem matematyka
						Tony'ego Freetha stworzyła specjalne urządzenie pozwalające wykonać bardzo
						dokładne zdjęcia rentgenowskie obiektu, a następnie sporządzić jego obraz 3D.
						Każdą część uwieczniono na około 3 tysiącach zdjęć, odczytano ponad 2 tysiące
						znaków, w tym terminy mechaniczne, policzono raz jeszcze liczbę zębów przy
						kołach. Amerykanie doszli do wniosku, że mechanizm z Antykithiry służył także do
						wyliczania czasów zaćmień Słońca i Księżyca. Bardzo dokładny model urządzenia
						przedstawiono w czasopiśmie „Scientific Reports” z 2021 roku.
					</Paragraph>
					<div className={classes["image__grid"]}>
						<img src={t__1} className={classes.img}/>
						<img src={t__2} className={classes.img}/>
						<img src={t__3} className={classes.img}/>
						<img src={t__4} className={classes.img}/>
						<img src={t__5} className={classes.img}/>
						<img src={t__6} className={classes.img}/>
						<img src={t__7} className={classes.img}/>
						<img src={t__8} className={classes.img}/>
						<img src={t__9} className={classes.img}/>
						<img src={t__10} className={classes.img}/>
						<img src={t__11} className={classes.img}/>
						<img src={t__12} className={classes.img}/>
						<img src={t__13} className={classes.img}/>
						<img src={t__14} className={classes.img}/>
						<img src={t__15} className={classes.img}/>
						<img src={t__16} className={classes.img}/>
					</div>
				</div>
			</div>
			<Wave className={classes["wave--1"]} />
		</section>
	);
};

export default Research;
