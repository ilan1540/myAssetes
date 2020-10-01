import React, { useState, useEffect } from 'react';
import { ExcelRenderer } from 'react-excel-renderer';
import { useDispatch, useSelector } from 'react-redux';
import { ShowExcelTav } from './ShowExcelTav';
//import { setExcelWb } from '../redux/actionHelper';

export const ReadExcelFile = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('Choose File');
  const [cols, setCols] = useState();
  const [rows, setRows] = useState();
  const dispatch = useDispatch();

  const onChange = (e) => {
    if (e.target.files[0].name) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  useEffect(() => {
    if (file) {
      ExcelRenderer(file, (err, resp) => {
        if (err) {
          console.log(err);
        } else {
          setCols(resp.cols);
          setRows(resp.rows);
          //  console.log(rows);
        }
      });
    }
  }, [file]);

  return (
    <div className="container">
      <form>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            accept=".xlsx,.xls, .csv "
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFile"></label>
        </div>
      </form>
      {cols && rows ? <ShowExcelTav rows={rows} cols={cols} /> : null}
    </div>
  );
};
