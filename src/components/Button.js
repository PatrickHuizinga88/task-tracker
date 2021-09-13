import PropTypes from 'prop-types'

const Button = ({onClick, text}) => {
    return (
        <button 
            onClick={onClick} 
            className="btn"
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    // text: PropTypes.string,
}

Button.defaultProps = {
    text: 'Add',
}

export default Button
