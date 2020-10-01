import React, { useState, useEffect } from 'react';
import { SaveToFirestore } from './SaveToFirestore';

export const ShowWorkBook = ({ wb, fileName }) => {
  const [sheetData, setSheetData] = useState();
  const [sheetInfo, setSheetInfo] = useState();

  useEffect(() => {
    if (wb) {
      const sheetTab = [];
      const sheetHeader = [];
      const info = [];
      wb.map((rec) => {
        sheetTab.push(rec.sheetName);

        const headerName = Object.keys(rec.sheetData[0]);
        sheetHeader.push(headerName);
        const sheetInfo = {
          tabName: rec.sheetName,
          sheetHeader: headerName,
          sheetData: rec.sheetData,
        };
        info.push(sheetInfo);

        return null;
      });

      setSheetInfo(info);
    }
  }, [wb]);

  const onSelectTab = (e) => {
    if (sheetInfo) {
      const sheet = sheetInfo.find((sheet) => {
        return sheet.tabName === e.target.name;
      });
      setSheetData(sheet);
    }
  };

  return (
    <div>
      <h3>{fileName}</h3>
      {wb ? (
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          {wb.map((rec) => (
            <li
              className="nav-item ml-1"
              role="presentation"
              key={rec.sheetName}
            >
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                name={rec.sheetName}
                onClick={onSelectTab}
              >
                {rec.sheetName}
              </a>
            </li>
          ))}
          <li>
            <SaveToFirestore />
          </li>
        </ul>
      ) : null}
      <div>
        <table className="table">
          <thead>
            <tr>
              {sheetData &&
                sheetData.sheetHeader.map((r, i) => (
                  <th className="text-right" key={i} scope="col">
                    {r}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {sheetData &&
              sheetData.sheetData.map((r, i) => (
                <tr key={i}>
                  {sheetData.sheetHeader.map((c, i) => (
                    <td key={i}>{r[c]}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
