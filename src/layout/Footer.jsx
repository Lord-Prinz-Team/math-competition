import classes from "./Footer.module.scss";
import Paragraph from "../components/Paragraph";
import FooterList from "../components/nav/FooterList";
const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={classes.footer}>
			<div className={classes["footer__logo-box"]}>
				<svg
					className={classes.footer__logo}
					xlink="http://www.w3.org/1999/xlink"
					version="1.1"
					id="Capa_1"
					x="0px"
					y="0px"
					viewBox="0 0 270.1 270.1"
					space="preserve"
				>
					<defs>
						<clipPath clipPathUnits="userSpaceOnUse" id="logo">
							<path
								shapeRendering="auto"
								imageRendering="auto"
								colorRendering="auto"
								className={classes.img}
								d="M33.9,70.1  C14.4,71.6-1.7,88.8,0.1,108.9c1.6,17.3,16.8,31.4,34.7,29.5c15-1.6,27.3-15,25.3-30.6c-1.6-12.7-13.2-23.1-26.6-21  c-10.4,1.7-19,11.5-16.6,22.6c0.9,4,3.2,7.6,6.5,9.9c3.3,2.4,7.9,3.6,12.4,2.1c2.9-0.9,5.3-2.8,6.9-5.5c1.6-2.7,2.1-6.9,0-10.3  c-1.7-2.7-3.3-3.2-5.8-3.6c-1.2-0.2-3-0.3-4.8,0.9c-1.8,1.2-2.8,3.7-2.8,5.4c0,1.3,0.5,2.6,1.4,3.6c-0.5-0.1-1-0.3-1.5-0.7  c-1.2-0.9-2.2-2.4-2.6-3.9c-1.1-5,3.2-9.9,8.4-10.7c7.3-1.2,14.1,5,15.1,12.4c1.2,9.7-6.7,18.4-16.4,19.4  c-12,1.3-22.6-8.6-23.7-20.5C8.8,93.7,20.5,81.2,34.7,80.1c0.1,0,0.3,0,0.4,0h200c0.1,0,0.3,0,0.4,0c14.2,1.1,25.9,13.6,24.6,27.9  c-1.1,11.9-11.7,21.8-23.7,20.5c-9.7-1-17.6-9.7-16.4-19.4c0.9-7.4,7.7-13.5,15.1-12.4c5.2,0.8,9.5,5.7,8.4,10.7  c-0.3,1.5-1.3,3-2.6,3.9c-0.5,0.4-1,0.6-1.5,0.7c0.9-1,1.5-2.2,1.4-3.6c0-1.8-1-4.2-2.8-5.4c-1.8-1.2-3.6-1.1-4.8-0.9  c-2.5,0.4-4.1,1-5.8,3.6c-2.1,3.3-1.6,7.6,0,10.3c1.6,2.7,3.9,4.6,6.9,5.5c4.5,1.4,9.1,0.3,12.4-2.1s5.6-5.9,6.5-9.9  c2.4-11.2-6.2-21-16.6-22.6c-13.4-2.1-25,8.3-26.6,21c-2,15.6,10.3,29,25.3,30.6c17.9,1.9,33.1-12.3,34.7-29.5  c1.8-20.1-14.2-37.2-33.8-38.8c-0.4-0.1-0.8,0-1.2,0h-200C34.7,70,34.3,70.1,33.9,70.1L33.9,70.1z M15.1,20.1c-2.8,0-5,2.2-5,5v10  c0,1.3,0.5,2.6,1.5,3.5l20,20c0.9,0.9,2.2,1.5,3.5,1.5h200c1.3,0,2.6-0.5,3.5-1.5l20-20c0.9-0.9,1.5-2.2,1.5-3.5v-10  c0-2.8-2.2-5-5-5C255.1,20.1,15.1,20.1,15.1,20.1z M20.1,30.1h230V33L233,50.1H37.1L20.1,33V30.1z M75.1,100.1c-2.8,0-5,2.2-5,5v140  c0,2.8,2.2,5,5,5c1,0,2-0.3,2.8-0.8l28.4-19c1.4-0.9,2.2-2.4,2.2-4.1l1.6-91c0,0,0-0.1,0-0.1c0-3.3,10.1-3.4,10-0.1c0,0,0,0.1,0,0.1  v80c0,2.8,2.2,5,5,5c1,0,2-0.3,2.8-0.8l30-20c1.4-0.9,2.2-2.5,2.2-4.2v-60c0-3.3,10-3.3,10,0v50c0,2.8,2.2,5,5,5  c0.8,0,1.5-0.2,2.2-0.5l20-10c1.7-0.8,2.8-2.6,2.8-4.5v-70c0-2.8-2.2-5-5-5L75.1,100.1L75.1,100.1L75.1,100.1z M80.1,110.1h110V172  l-10,5v-41.9c0-16.7-30-16.7-30,0v57.3l-20,13.3v-70.7v0.1c0.3-16.7-30-16.8-30-0.1V135l-1.5,88.4l-18.5,12.3L80.1,110.1L80.1,110.1  z"
							/>
						</clipPath>
					</defs>
				</svg>
			</div>

			<div className={`${classes.footer__navigation} ${classes.upperline}`}>
				<FooterList />
			</div>

			<div className={classes.footer__copyright}>
				<Paragraph className={`${classes.footer__copyright_text} ${classes.upperline}`}>
					Strona została stworzona przez &nbsp;
					<a
						className={classes.link}
						href="https://www.facebook.com/profile.php?id=100008667137923"
					>
						Oskara Płazińskiego
					</a>
					. &copy; Copyright {currentYear}
				</Paragraph>
			</div>
		</footer>
	);
};

export default Footer;
