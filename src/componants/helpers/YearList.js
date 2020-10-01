import React from 'react';

export const YearList = ({ onSelectYear }) => {
  const year = [
    'שנה...',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
  ];

  return (
    <div>
      <select className="custom-select" onChange={onSelectYear}>
        {year.map((id) => (
          <option key={id}>{id}</option>
        ))}
      </select>
    </div>
  );
};
