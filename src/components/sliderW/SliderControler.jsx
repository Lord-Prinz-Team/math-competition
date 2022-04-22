import Slide from "./Slide";
import classes from "./SliderControler.module.scss";

const SliderControler = (props) => {
    const slide = props.currentSlide;
    return <div className={classes.slider__controler}>
        {props.options.map((option, index) => {
            if(slide === index) {
                return <Slide key={index}>{option.name}</Slide>
            }
        })}
    </div>
}


export default SliderControler;