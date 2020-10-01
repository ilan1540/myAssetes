import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { numberWithCommas } from '../globalFunc';
import { PageHeader } from '../helpers/PageHeader';

export const AllAssets = () => {
  const [total, setTotal] = useState(0);
  useFirestoreConnect([
    {
      collection: 'kopot',
      orderBy: ['gofMenahel', 'asc'],
      // where: ['codeMaslol', '==', '508'],
    },
  ]);
  const kopot = useSelector(
    (state) => state.firestore.ordered.kopot && state.firestore.ordered.kopot
  );
  useFirestoreConnect(['options']);
  const options = useSelector(
    (state) =>
      state.firestore.ordered.options && state.firestore.ordered.options[0]
  );

  useEffect(() => {
    var sum = 0;
    kopot &&
      kopot.map((rec) => {
        if (rec.shiarok.length > 0) {
          sum = sum + rec.shiarok[rec.shiarok.length - 1].secom;
        }
        return null;
      });
    setTotal(sum);
  }, [kopot, total]);

  return (
    <div className="container mt-3">
      <PageHeader word1="רשימת" word2="נכסים" />

      <div className="row justify-content-between">
        {options && options.allowAdd ? (
          <div className="col-md-1">
            <Link to="/addkopa">
              <i className="fas icom35px fa-plus-circle"></i>
            </Link>
          </div>
        ) : null}
        <div className="col-md-5"></div>
        <div className="col-md-4">
          <p>סה"כ שווי נכסים</p>
        </div>
        <div className="col-md-2">{numberWithCommas(total)}</div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <form>
            <table className="table table-striped  table-sm">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">גוף מנהל</th>
                  <th scope="col">מוטב</th>
                  <th scope="col">מסלול</th>
                  <th scope="col">שם מסלול</th>
                  <th scope="col">תאריך שיערוך</th>
                  <th scope="col">יתרה</th>
                </tr>
              </thead>
              <tbody>
                {kopot &&
                  kopot.map((rec) => (
                    <tr key={rec.id}>
                      <td>
                        <Link
                          className="btn btn-sm btn-outline-secondary"
                          to={`/assete/${rec.id}`}
                        >
                          פרטים
                        </Link>
                      </td>
                      <td>{rec.gofMenahel}</td>
                      <td>{rec.motavName}</td>
                      <td>{rec.codeMaslol}</td>
                      <td>{rec.maslolName}</td>
                      {rec.shiarok.length > 0 ? (
                        <td>{rec.shiarok[rec.shiarok.length - 1].date}</td>
                      ) : null}
                      {rec.shiarok.length > 0 ? (
                        <td>
                          {numberWithCommas(
                            rec.shiarok[rec.shiarok.length - 1].secom
                          )}
                        </td>
                      ) : null}
                    </tr>
                  ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};
