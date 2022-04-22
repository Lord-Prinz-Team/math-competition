import Control from "./Control";
import classes from "./Slider.module.scss";
import {useState} from "react";
import SliderControler from "./SliderControler";
const Slider = (props) => {

    const options = [
        {
            name: "test1"
        }, {
            name: "test2"
        }, {
            name: "test3"
        }
    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    const changeSlide = (index) => {
        if(currentSlide === index) {
            return;
        }
        setCurrentSlide(index);
    }

    return <div className={`${classes.slider} ${props.className} `}>
        <Control options={options} changeSlide={changeSlide}/>
        <SliderControler options={options} currentSlide={currentSlide}/>
    </div>
}

export default Slider;