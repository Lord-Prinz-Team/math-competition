import classes from "./ControlOption.module.scss";

const ControlOption = (props) => {
    return (
    <div className={classes.control__option} onClick={props.onClick} >
       {props.index + 1} | {props.children}
    </div>)
}

export default ControlOption;