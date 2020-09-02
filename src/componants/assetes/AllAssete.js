import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { numberWithCommas } from '../globalFunc';

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
      <h1 className="text-center">
        All <span className="text-primary">Assetes</span>
      </h1>
      <div className="row">
        <div className="col-md-1">
          <Link to="/addkopa">
            <i className="fas icom35px fa-plus-circle"></i>
          </Link>
        </div>
        <div className="col-md-11">{numberWithCommas(total)}</div>
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
