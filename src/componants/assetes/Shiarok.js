import React from 'react';
import { numberWithCommas } from '../globalFunc';

export const Shiarok = ({ id, shiarok, del, save }) => {
  return (
    <div>
      <div className="container mt-5 col-md-6">
        <table className="table table-borderless table-sm xborder">
          <thead>
            <tr>
              <th colSpan="4" className="text-center">
                שיערוך
              </th>
            </tr>
          </thead>
          <tbody>
            {shiarok &&
              shiarok.map((rec, i) => (
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
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-success btn-sm btn-block"
          onClick={() => save(shiarok)}
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
