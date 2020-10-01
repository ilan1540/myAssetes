import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

export const Select = ({ listName, onSelectSog, lblName }) => {
  useFirestoreConnect([
    {
      collection: listName,
      orderBy: ['name', 'asc'],
    },
  ]);
  var list = useSelector(
    (state) =>
      state.firestore.ordered.groupExpenses && state.firestore.ordered[listName]
  );
  // console.log(list);
  return (
    <div>
      <label htmlFor="sog">{lblName}</label>
      {list ? (
        <select className="custom-select" onChange={onSelectSog} id="sog">
          <option value="Choose here" selected>
            בחר...
          </option>
          {list.map((rec) => (
            <option key={rec.id}>{rec.name}</option>
          ))}
        </select>
      ) : null}
    </div>
  );
};
