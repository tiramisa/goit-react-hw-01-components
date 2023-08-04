import React from 'react';
import { tableStyles, thStyles, tdStyles, transactionAllStyles } from './TransactionHistoryStyles';

const TransactionHistory = ({ items }) => {
  return (
    <div style={transactionAllStyles}>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={thStyles}>Type</th>
            <th style={thStyles}>Amount</th>
            <th style={thStyles}>Currency</th>
          </tr>
        </thead>
        <tbody className="table">
          {items.map((item, index) => (
            <tr key={index}>
              <td style={tdStyles}>{item.type}</td>
              <td style={tdStyles}>{item.amount}</td>
              <td style={tdStyles}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;

