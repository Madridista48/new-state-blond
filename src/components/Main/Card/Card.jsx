import {useState} from "react";

import Titles from "../../Titles/Titles.jsx";
import Button from "../../UI/Button/Button.jsx";
import PropTypes from "prop-types";


const Card = ({title, buttonText}) => {
    const [text, setText] = useState(true)

    const changeText = (e) => {
        e.preventDefault()
        setText(prevState => !prevState)

    }

    return (
        <section>
            <Titles title={title} />
            <Button text={text?buttonText:"Close"} onClick={changeText}/>
        </section>
    );
};

export default Card;

Card.propTypes= {
    title: PropTypes.string,
    buttonText: PropTypes.string,
}