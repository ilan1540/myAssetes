import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { SogList } from './SogList';

export const OptionHendel = () => {
  // const firestore = useFirestore();
  useFirestoreConnect([
    {
      collection: 'options',
    },
  ]);

  var options = useSelector((state) => state.firestore.ordered.options);

  // console.log(options);
  return (
    <div className="container">
      <h1 className="text-center mt-3">ניהול סוגי הוצאות</h1>
      {options ? (
        <div className="row">
          <div className="col-md-4">
            <h2>קבוצת הוצאות</h2>
            <SogList listName="groupExpenses" />
          </div>
          <div className="col-md-4">
            <h2>רשימת הוצאות</h2>
            <SogList listName="listExpenses" />
          </div>
          <div className="col-md-4">
            <h2>סוג תשלום</h2>
            <SogList listName="sogTash" />
          </div>
        </div>
      ) : null}
    </div>
  );
};
