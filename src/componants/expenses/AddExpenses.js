import React, { useState } from 'react';
import { SelectDate } from '../helpers/DatePicker';
import { PageHeader } from '../helpers/PageHeader';
import { Select } from '../helpers/Select';
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';

export const AddExpenses = () => {
  const firestore = useFirestore();
  const [groupExp, setGroupExp] = useState();
  const [listExp, setListExp] = useState();
  const [sogTash, setSogTash] = useState();
  const [secom, setSecom] = useState('');
  const [pratim, setPratim] = useState('');
  const date = useSelector((state) => state.helpers && state.helpers.date);
  // console.log(date);

  const onSaveClick = async (e) => {
    e.preventDefault();
    const newRec = {
      groupExp: groupExp,
      listExp: listExp,
      sogTash: sogTash,
      date: date,
      secom: secom,
      pratim: pratim,
      // hafkadot: [],
      // shiarok: [],
    };

    return await firestore.collection('expenses').add(newRec);
    // .then(() => props.history.push('/allassets'));
  };

  return (
    <div className="container mt-2">
      <PageHeader word1="הוספת" word2="הוצאה" />
      <form>
        <div className="row justify-content-md-center">
          <div className="col-md-3 form-group">
            <Select
              className="form-control"
              lblName="קבוצת הוצאה"
              listName="groupExpenses"
              onSelectSog={(e) => setGroupExp(e.target.value)}
            />
          </div>
          <div className="col-md-3 form-group">
            <Select
              className="form-control"
              lblName="סוג הוצאה"
              listName="listExpenses"
              onSelectSog={(e) => setListExp(e.target.value)}
            />
          </div>
          <div className="col-md-3 form-group">
            <Select
              className="form-control"
              lblName="סוג תשלום"
              listName="sogTash"
              onSelectSog={(e) => setSogTash(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group row  justify-content-md-center">
          <div className="col-md-2 form-group">
            <label htmlFor="date" className="col-form-label">
              תאריך
            </label>
            <SelectDate id="date" />
          </div>
          <div className="col-md-2 form-group">
            <label htmlFor="secom" className="col-form-label">
              סכום
            </label>
            <input
              className="form-control"
              type="text"
              name="secom"
              value={secom}
              onChange={(e) => setSecom(e.target.value)}
            />
          </div>
          <div className="col-md-5 form-group">
            <label htmlFor="pratim" className="col-form-label">
              פרטים
            </label>
            <input
              className="form-control"
              type="text"
              name="pratim"
              value={pratim}
              onChange={(e) => setPratim(e.target.value)}
            />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-9">
            <button
              type="button"
              className="btn btn-primary btn-sm btn-block"
              onClick={onSaveClick}
            >
              שמירה
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
