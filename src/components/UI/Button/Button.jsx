import PropTypes from "prop-types";
import css from './Button.module.css'

const Button = ({text, onClick}) => {
    return (
        <button className={css.button} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}