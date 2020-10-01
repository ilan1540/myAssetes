import React, { useState } from 'react';
import { MonthList } from '../helpers/MonthList';
import { Select } from '../helpers/Select';

export const Home = () => {
  const [month, setMonth] = useState();
  console.log(month);
  return (
    <div>
      <h1>home</h1>
      <MonthList selectMonth={(e) => setMonth(e.target.value)} />
      <Select
        listName="groupExpenses"
        onSelectSog={() => console.log('select')}
      />
    </div>
  );
};
