import React from 'react';
import styles from './StatisticsStyles.module.css';

const GetStatistics = ({ title, stats }) => {
  return (
    <div className={styles['statistic-card']}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles['statistic-card__item']}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${styles['statistic-card__item']} ${styles[`statistic-card__item-color-${index + 1}`]}`}
          >
            <div className={styles['stat-text']}>
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}%</span>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GetStatistics;

