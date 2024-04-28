import PropTypes from "prop-types";

import css from './Titles.module.css'

const Titles = ({ title }) => {
    return (
        <p className={css.title}>{title} уй тапшырма</p>
    );
};

export default Titles;

Titles.propTypes = {
    title: PropTypes.string
}