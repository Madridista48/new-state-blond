import PropTypes from "prop-types";


const Titles = ({ title }) => {
    return (
        <h1>{title} уй тапшырма</h1>
    );
};

export default Titles;

Titles.propTypes = {
    title: PropTypes.string
}