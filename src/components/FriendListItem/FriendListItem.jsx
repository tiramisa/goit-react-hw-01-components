import React from 'react';
import styles from '../Friend/FriendListStyles.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={`${styles['friend-item']} ${isOnline ? styles.online : styles.offline}`}>
      <span className={`${styles['status-indicator']} ${isOnline ? styles['status-online'] : styles['status-offline']}`}></span>
      <img className={styles.avatar} src={avatar} alt="User avatar" />
      <p className={styles['friend-name']}>{name}</p>
    </li>
  );
};

export default FriendListItem;

