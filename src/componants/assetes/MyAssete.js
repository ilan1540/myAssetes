import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { numberWithCommas } from '../globalFunc';
import { MiniNav } from '../helpers/MiniNav';

export const MyAssete = (props) => {
  useFirestoreConnect(
    [`kopot/${props.match.params.id}`],
    [props.match.params.id]
  );
  const kopot = useSelector(
    (state) => state.firestore.ordered.kopot && state.firestore.ordered.kopot[0]
  );
  const [total, setTotal] = useState(0);
  const [indexShiarok, setIndexShiarok] = useState(0);
  const [shiarok, setShiarok] = useState(0);

  useEffect(() => {
    setIndexShiarok(kopot && kopot.shiarok.length - 1);
    setShiarok(kopot && kopot.shiarok);
  }, [kopot]);

  useEffect(() => {
    var sum = 0;
    kopot &&
      kopot.hafkadot.map((rec) => {
        sum = sum + rec.secom;
        return null;
      });
    setTotal(sum);
    // console.log(indexShiarok);
  }, [kopot, total]);

  function moveFor() {
    const maxIndex = kopot.shiarok.length - 1;
    if (indexShiarok < maxIndex) {
      setIndexShiarok(indexShiarok + 1);
      //  console.log(indexShiarok);
    }
  }
  function moveBack() {
    // const maxIndex = kopot.shiarok.length - 1;
    if (indexShiarok > 0) {
      setIndexShiarok(indexShiarok - 1);
      //  console.log(indexShiarok);
    }
  }

  return (
    <div className="row mt-5">
      {kopot ? (
        <div className="col-md-10 mx-auto">
          <h1 className="text-center">
            My <span className="text-primary">Assetes</span>
          </h1>
          <form>
            <div className="row">
              <div className="col-md-4">
                <Link
                  to={`/editKopa/${kopot.id}`}
                  className="btn btn-secondary btn-block"
                >
                  עדכן
                </Link>
                <table className="table table-borderless xborder table-sm">
                  <tbody>
                    <tr>
                      <th scope="row">מספר חשבון</th>
                      <td>{kopot.accountNo}</td>
                    </tr>
                    <tr>
                      <th scope="row">שם מוטב</th>
                      <td>{kopot.motavName}</td>
                    </tr>
                    <tr>
                      <th scope="row">גוף מנהל</th>
                      <td>{kopot.gofMenahel}</td>
                    </tr>
                    <tr>
                      <th scope="row">מסלול </th>
                      <td>{kopot.maslolName}</td>
                    </tr>
                    <tr>
                      <th scope="row">קוד מסלול</th>
                      <td>{kopot.codeMaslol}</td>
                    </tr>
                    <tr>
                      <th scope="row">דמי ניהול</th>
                      <td>{kopot.dNihol}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-3">
                <Link
                  to={`/editHafkada/${kopot.id}`}
                  className="btn btn-secondary btn-block"
                >
                  עדכן
                </Link>
                <table className="table table-borderless table-sm xborder">
                  <thead>
                    <tr>
                      <th colSpan="2" className="text-center">
                        הפקדות
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {kopot.hafkadot.map((rec, i) => (
                      <tr key={i}>
                        <td>{rec.date}</td>
                        <td>{numberWithCommas(rec.secom)}</td>
                      </tr>
                    ))}
                    <tr>
                      <th scope="row">סך הפקדות</th>
                      <td>{numberWithCommas(total)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-4 ">
                <MiniNav
                  moveFor={moveFor}
                  moveBack={moveBack}
                  edit={`/editShiarok/${kopot.id}`}
                />
                <div className="card xborder" style={{ width: '18rem' }}>
                  <div className="card-body pt-0 px-0">
                    {shiarok ? (
                      <div>
                        <h4 className="card-title m-2">
                          שווי ליום <span>{shiarok[indexShiarok].date}</span>
                        </h4>
                        <h3 className="text-center">
                          {numberWithCommas(shiarok[indexShiarok].secom)}
                        </h3>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/allassets" className="btn btn-primary btn-block">
              <i className="fas fa-reeow-circle-rigth">GO Back</i>
            </Link>
          </form>
        </div>
      ) : null}
    </div>
  );
};
