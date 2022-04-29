import Heading from "../components/Heading";
import classes from "./Math.module.scss";

const Math = () => {
  return <section className={`${classes.math} u-center-text`} id="math">
    <header className={classes.header}>
      <Heading isAnimated={true} size="2" style={{ color: "#ddd" }}>Matematyka w Mechaniźmie</Heading>
    </header>
    <div className={classes.container}>
      
    </div>
  </section>
}

export default Math;