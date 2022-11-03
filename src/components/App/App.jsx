import { useState } from 'react';

import { Section, Statistics, FeedbackOptions } from 'components';

import css from './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };

  const handleIncrement = ({ target: { name } }) => {
    options[name](prev => prev + 1);
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const positiveFeedbackPercentage = () => {
    return Math.round(good * (100 / totalFeedback()));
  };

  return (
    <div className={css.container}>
      <h1>Feedback Form</h1>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback()}
          positivePercentage={positiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};

export default App;
