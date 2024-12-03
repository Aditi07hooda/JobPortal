import PropTypes from "prop-types";

const Button = ({ onclick, text, type }) => {
  return (
    <div>
      <button
        onClick={onclick}
        type={type}
        className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md text-white font-semibold"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  onclick: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};
