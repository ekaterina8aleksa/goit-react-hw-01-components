import React from 'react';
import PropTypes from 'prop-types';

import './Statistics.scss';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="statistics__title">{title}</h2>}

      <ul className="statistics__stat-list">
        {stats.map(statEl => (
          <li key={statEl.id} className="statistics__item">
            <span className="statistics__label">{statEl.label} </span>
            <span className="statistics__percentage">{statEl.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
