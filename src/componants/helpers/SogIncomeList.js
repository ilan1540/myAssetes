import React from 'react';

export const SogIncomeList = ({ onSelectSog }) => {
  const sog = [
    'סוג הכנסה...',
    'קצבה כלל',
    'ביטוח לאומי',
    'שכר דירה',
    'איכילוב ',
    'קרן המחקרים',
    'אחר החזר הוצאות',
  ];

  return (
    <div>
      <select className="custom-select" onChange={onSelectSog}>
        {sog.map((id) => (
          <option key={id}>{id}</option>
        ))}
      </select>
    </div>
  );
};
