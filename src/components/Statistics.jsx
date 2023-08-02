import React, { useState } from 'react';

const statisticsStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '200px',
  width: '500px',
  backgroundColor: '#f3f6f9',
  borderRadius: '8px',
  overflow: 'hidden',
  paddingTop: '50px',
  cursor: 'pointer',
  transition: 'box-shadow 0.3s',
  boxShadow: '0 9px 10px rgba(0, 0, 0, 0.2), 9px 0 10px rgba(0, 0, 0, 0.2)',
};

const colors = ['#70b7cf', '#ba70cf', '#f25a5a', '#5a6ef2','#646a8f'];

const itemStyles = {
  color: 'black',
  listStyle: 'none',
  width: '500px',
  display: 'flex',
  justifyContent: 'center',
};

  const listItemStyles = {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: colors[0],
    boxShadow: '0 9px 10px rgba(0, 0, 0, 0.2), 9px 0 10px rgba(0, 0, 0, 0.2)',
    width: '100%',
    transition: 'box-shadow 0.3s',
  };

const GetStatistics = ({ title, stats }) => {
  const [isHovered, setIsHovered] = useState(null);

  const handleHover = (index) => {
    setIsHovered(index);
  };

  return (
    <div
      style={{
        ...statisticsStyles,
        backgroundColor: isHovered !== null ? '#ccc' : '#f3f6f9',
        boxShadow: isHovered !== null
          ? '0 9px 20px rgba(0, 0, 0, 0.4), 9px 0 20px rgba(0, 0, 0, 0.4)'
          : '0 9px 10px rgba(0, 0, 0, 0.2), 9px 0 10px rgba(0, 0, 0, 0.2)',
      }}
      className="statistics"
    >
      {title && <h2 className="title">{title}</h2>}

      <ul style={itemStyles} className="stat-list">
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              ...listItemStyles,
              backgroundColor: colors[index],
              boxShadow: isHovered === index
                ? '0 9px 20px rgba(0, 0, 0, 0.4), 9px 0 20px rgba(0, 0, 0, 0.4)'
                : '0 9px 10px rgba(0, 0, 0, 0.2), 9px 0 10px rgba(0, 0, 0, 0.2)',
            }}
            className="item"
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GetStatistics;