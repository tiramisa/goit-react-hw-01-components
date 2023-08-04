import React from 'react';
import './StatisticsStyles.css';

const GetStatistics = ({ title, stats }) => {
  return (
    <div className="statistic-card">
      {title && <h2 className="title">{title}</h2>}

      <ul className="statistic-card__item">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`statistic-card__item statistic-card__item-color-${index + 1}`}
          ><div className='stat-text'>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span></div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GetStatistics;
