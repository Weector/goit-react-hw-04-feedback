import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const optionStyle = {
  good: css.good,
  neutral: css.neutral,
  bad: css.bad,
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <li>
      <button
        className={optionStyle[options.toLowerCase()]}
        type="button"
        onClick={onLeaveFeedback}
        name={options.toLowerCase()}
      >
        {options}
      </button>
    </li>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
