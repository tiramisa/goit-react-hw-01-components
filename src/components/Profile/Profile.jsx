import React from 'react';
import styles from './ProfileStyles.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.ProfileWrapper}>
      <div className={styles.ProfileDescription}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.Avatar}
          width={100}
          height={100}
        />
        <p className={styles.Name}>{username}</p>
        <p className={styles.Tag}>@{tag}</p>
        <p className={styles.Location}>{location}</p>
      </div>

      <ul className={styles.StatsList}>
        <li className={styles.StatItem}>
          <span>Followers</span>
          <span className={styles.Quantity}>{stats.followers}</span>
        </li>
        <li className={styles.StatItem}>
          <span>Views</span>
          <span className={styles.Quantity}>{stats.views}</span>
        </li>
        <li className={styles.StatItem}>
          <span>Likes</span>
          <span className={styles.Quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;



