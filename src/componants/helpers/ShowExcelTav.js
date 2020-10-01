import React, { useState, useEffect } from 'react';

export const ShowExcelTav = ({ cols, rows }) => {
  const [header, setHeader] = useState();
  const [flage, setFlage] = useState(true);

  useEffect(() => {
    const hedLine = rows && rows[0];
    // console.log(hedLine);
    console.log(rows);
    const newRec = [];
    rows &&
      rows.map((r, i) => {
        hedLine.map((h) => {
          const newLine = {
            [hedLine[i]]: r[i],
          };
        });

        newRec.push(newRec);
      });
    console.log(newRec);
  }, []);

  useEffect(() => {
    if (flage && header) {
      var newCols = [];

      cols.map((r) => {
        newCols.push({
          key: r.key,
          name: header[r.key],
        });
        //  console.log(r);
      });
      //  console.log(newCols);
      setHeader(newCols);
      cols = newCols;
      setFlage(false);
    }
  }, [header]);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {header &&
              header.map((c, i) => (
                <th
                  scope="col"
                  key={i}
                  onDoubleClick={() => console.log(c.key)}
                >
                  {c.name}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {rows &&
            rows.map((r, i) => (
              <tr key={i} onDoubleClick={() => setHeader(r)}>
                {r && r.map((c, i) => <td key={i}>{c}</td>)}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
