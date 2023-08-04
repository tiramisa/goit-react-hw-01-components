import React from 'react';

const TransactionHistory = ({ items }) => {
  const tableStyles = {
    width: '500px',
    borderCollapse: 'collapse',
    margin: '0',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  };

  const thStyles = {
    color: '#333',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#96e0dd',
  };

  const tdStyles = {
    border: '1px solid #ddd',
    padding: '12px',
    fontSize: '14px',
    backgroundColor: '#96a0e0',
  };

  const transactionAllStyles = {
    margin: '100px',
    boxShadow: '0 9px 10px rgba(0, 0, 0, 0.2), 9px 0 10px rgba(0, 0, 0, 0.2)',
  };

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
