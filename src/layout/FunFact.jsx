import Wave from "../components/Wave";
import classes from "./FunFact.module.scss";

const FunFact = () => {
	return (
		<section className={classes["fun-fact"]}>
			<Wave className={classes.wave} />{" "}
		</section>
	);
};

export default FunFact;
