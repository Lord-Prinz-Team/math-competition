import classes from "./Slide.module.scss";

const Slide = (props) => {
    return <div className={`${props.className} ${classes.slide}`}>{props.children}</div>
}

export default Slide;