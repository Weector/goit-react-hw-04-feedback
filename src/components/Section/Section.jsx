import PropTypes from 'prop-types';

import css from './Section.module.css';

const Section = ({ children, title }) => {
  return (
    <section>
      <h2>{title} </h2>
      <ul className={css.list}>{children}</ul>
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
