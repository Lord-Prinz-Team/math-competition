import classes from "./FooterLink.module.scss";

const FooterLink = (props) => {
	return (
		<li className={classes.footer__item}>
			<a href={props.url} className={classes.footer__link}>
				{props.name}
			</a>
		</li>
	);
};

export default FooterLink;
