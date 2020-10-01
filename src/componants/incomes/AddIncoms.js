import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { MonthList } from '../helpers/MonthList';
import { YearList } from '../helpers/YearList';
import { SogIncomeList } from '../helpers/SogIncomeList';

export const AddIncoms = (props) => {
  const [year, setYear] = useState(' ');
  const [month, setMonth] = useState('');
  const [sogIncome, setSogIncome] = useState('');
  const [broto, setBroto] = useState('');
  const [tax, setTax] = useState('');
  const [bl, setBl] = useState('');
  const [br, setBr] = useState('');
  const [gemel, setGemel] = useState('');
  const [outher, setOuther] = useState('');
  const firestore = useFirestore();

  async function addIncome(e) {
    e.preventDefault();

    const newRec = {
      year: year,
      month: month,
      sogIncome: sogIncome,
      broto: broto,
      tax: tax,
      bl: bl,
      br: br,
      gemel: gemel,
      outher: outher,
    };
    console.log(newRec);

    return await firestore
      .collection('incomes')
      .add(newRec)
      .then(() => props.history.push('/home'));
  }

  return (
    <div className="container mt-3">
      <div className="col-md-10 mx-auto">
        <h1 className="text-center">
          Add <span className="text-primary">Income</span>
        </h1>
      </div>
      <form className="mt-4">
        <div className="form-row">
          <div className="form-group col-md-4 ">
            <YearList
              className="form-control"
              type="text"
              name="year"
              value={year}
              onSelectYear={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4 ">
            <MonthList
              className="form-control"
              type="text"
              name="month"
              value={month}
              onSelectMonth={(e) => setMonth(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4 ">
            <SogIncomeList
              className="form-control"
              type="text"
              name="sogIncome"
              value={sogIncome}
              onSelectSog={(e) => setSogIncome(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4 ">
            <label htmlFor="broto">הכנסה ברוטו</label>
            <input
              type="text"
              className="form-control"
              name="broto"
              value={broto}
              onChange={(e) => setBroto(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4 ">
            <label htmlFor="tax">מס הכנסה</label>
            <input
              type="text"
              className="form-control"
              name="tax"
              value={tax}
              onChange={(e) => setTax(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4 ">
            <label htmlFor="bl">ביטוח לאומי</label>
            <input
              type="text"
              className="form-control"
              name="bl"
              value={bl}
              onChange={(e) => setBl(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4 ">
            <label htmlFor="br">ביטוח בריאות</label>
            <input
              type="text"
              className="form-control"
              name="br"
              value={br}
              onChange={(e) => setBr(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4 ">
            <label htmlFor="outher">ניכויים גמל</label>
            <input
              type="text"
              className="form-control"
              name="outher"
              value={gemel}
              onChange={(e) => setGemel(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4 ">
            <label htmlFor="outher">נכויים אחרים</label>
            <input
              type="text"
              className="form-control"
              name="outher"
              value={outher}
              onChange={(e) => setOuther(e.target.value)}
            />
          </div>
        </div>
      </form>
      <button className="btn btn-sm  btn-primary btn-block" onClick={addIncome}>
        שמירה
      </button>
      <Link to="/allIncomes" className="btn btn-primary btn-block">
        <i className="fas fa-arrow-alt-circle-left">חזור</i>
      </Link>
    </div>
  );
};
