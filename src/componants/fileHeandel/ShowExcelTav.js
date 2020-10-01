import React from 'react';

export const ShowExcelTav = ({ cols, rows }) => {
  console.log(cols, rows);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {cols &&
              cols.map((c) => (
                <th scope="col" key={c.key}>
                  {c.name}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {rows &&
            rows.map((r, i) => (
              <tr key={i}>{r && r.map((c, i) => <td key={i}>{c}</td>)}</tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
