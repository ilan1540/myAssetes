import React from 'react';

export const MonthList = ({ onSelectMonth }) => {
  const month = [
    'חודש...',
    'ינואר',
    'פברואר',
    'מרץ',
    'אפריל',
    'מאי',
    'יוני',
    'יולי',
    'אוגוסט',
    'ספטמבר',
    'אוקטובר',
    'נובמבר',
    'דצמבר',
  ];

  return (
    <div>
      <select className="custom-select" onChange={onSelectMonth}>
        {month.map((id) => (
          <option key={id}>{id}</option>
        ))}
      </select>
    </div>
  );
};
