import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';
export const SogList = ({ listName }) => {
  const [id, setId] = useState();
  const [sogName, setSogName] = useState();
  const firestore = useFirestore();

  useFirestoreConnect([
    {
      collection: listName,
      orderBy: ['name', 'asc'],
    },
  ]);

  useEffect(() => {
    const box = async () => {
      var isDel = window.confirm('האם  למחוק רשומה');
      if (isDel === true) {
        return await firestore.collection(listName).doc(id).delete();
      }
    };

    if (id) {
      box();
    }
  }, [id, firestore, listName]);

  var groupExp = useSelector(
    (state) =>
      state.firestore.ordered.groupExpenses && state.firestore.ordered[listName]
  );
  //  console.log(groupExp);

  const onAddSubmit = async (e) => {
    e.preventDefault();
    const newRec = {
      name: sogName,
    };

    return await firestore.collection(listName).add(newRec);
    // .then(() => props.history.push('/allassets'));
  };

  return (
    <div>
      <form>
        <div className="row">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              name="sogName"
              onChange={(e) => setSogName(e.target.value)}
            />
          </div>
          <div className="col-md-1">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={onAddSubmit}
            >
              Add
            </button>
          </div>
        </div>
        <div className="mt-2">
          <ul className="list-group p-0">
            {groupExp &&
              groupExp.map((item, i) => (
                <li
                  className="list-group-item mylist"
                  key={item.id}
                  onDoubleClick={() => {
                    setId(item.id);
                  }}
                >
                  {item.name}
                </li>
              ))}
          </ul>
          <p>DoubleClick למחיקה </p>
        </div>
      </form>
    </div>
  );
};
