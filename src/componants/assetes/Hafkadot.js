import React, { useState, useEffect } from 'react';
import { numberWithCommas } from '../globalFunc';
export const Hafkadot = ({ id, hafkadot, del, save }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    var sum = 0;
    hafkadot && hafkadot.map((rec) => (sum = sum + rec.secom));
    setTotal(sum);
  }, [hafkadot, total]);
  return (
    <div>
      <div className="container mt-5 col-md-6">
        <table className="table table-borderless table-sm xborder">
          <thead>
            <tr>
              <th colSpan="4" className="text-center">
                הפקדות
              </th>
            </tr>
          </thead>
          <tbody>
            {hafkadot &&
              hafkadot.map((rec, i) => (
                <tr key={i}>
                  <td>
                    <i
                      type="button"
                      className="fas fa-trash"
                      onClick={() => del(rec.date)}
                    >
                      del
                    </i>
                  </td>

                  <td>{rec.date}</td>
                  <td>{numberWithCommas(rec.secom)}</td>
                </tr>
              ))}
            <tr>
              <td></td>
              <th scope="row">סך הפקדות</th>
              <td>{numberWithCommas(total)}</td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-success btn-sm btn-block"
          onClick={() => save(hafkadot)}
        >
          Save
        </button>
        <a href={`/assete/${id}`} className="btn btn-primary btn-block">
          <i className="fas fa-reeow-circle-rigth">GO Back</i>
        </a>
      </div>
    </div>
  );
};

/*
<td>
                    <i
                      type="button"
                      className="far fa-edit"
                      onClick={() => edit(rec.date)}
                    >
                      edit
                    </i>
                  </td>
*/
