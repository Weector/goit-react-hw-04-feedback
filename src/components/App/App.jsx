import React, { Component } from 'react';

import { Section, Statistics, FeedbackOptions } from 'components';

import css from './App.module.css';

class FeedbackCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const { name } = e.target;
    this.setState(() => ({
      [name]: this.state[name] + 1,
    }));
  };

  sumTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + bad + neutral;
  }

  countPositiveFeedbackPercentage() {
    if (!this.sumTotalFeedback()) return 0;

    return Math.round(this.state.good * (100 / this.sumTotalFeedback()));
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.container}>
        <h1>Feedback Form</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options="Good"
            onLeaveFeedback={this.handleIncrement}
          />
          <FeedbackOptions
            options="Neutral"
            onLeaveFeedback={this.handleIncrement}
          />
          <FeedbackOptions
            options="Bad"
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.sumTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export const App = () => {
  return <FeedbackCounter />;
};
