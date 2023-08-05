import React from 'react';
import styles from './TransactionHistoryStyles.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.transactionAllStyles}>
      <table className={styles.tableStyles}>
        <thead>
          <tr>
            <th className={styles.thStyles}>Type</th>
            <th className={styles.thStyles}>Amount</th>
            <th className={styles.thStyles}>Currency</th>
          </tr>
        </thead>
        <tbody className={styles.table}>
          {items.map((item, index) => (
            <tr key={index}>
              <td className={styles.tdStyles}>{item.type}</td>
              <td className={styles.tdStyles}>{item.amount}</td>
              <td className={styles.tdStyles}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;


