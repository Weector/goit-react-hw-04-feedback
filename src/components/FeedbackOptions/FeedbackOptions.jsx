import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const optionStyle = {
  good: css.good,
  neutral: css.neutral,
  bad: css.bad,
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(option => (
    <li key={option}>
      <button
        className={optionStyle[option]}
        type="button"
        onClick={onLeaveFeedback}
        name={option}
      >
        {option}
      </button>
    </li>
  ));
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.shape().isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
