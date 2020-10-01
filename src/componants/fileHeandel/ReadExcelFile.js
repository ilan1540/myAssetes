import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setExcelWb } from '../../redux/actionHelper';
import xlsx from 'xlsx';
//import './excel.css';
import { ShowWorkBook } from './ShowWorkBook';

export const ReadExcelFile = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('Choose File');

  const dispatch = useDispatch();
  const workBook = useSelector((state) => state.helpers.wb);

  const onChange = (e) => {
    if (e.target.files[0].name) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  useEffect(() => {
    if (file) {
      let wb = [];
      let fileReader = new FileReader();
      fileReader.readAsBinaryString(file);
      fileReader.onload = (event) => {
        let data = event.target.result;
        let workbook = xlsx.read(data, { type: 'binary' });

        workbook.SheetNames.forEach((sheet, i) => {
          let rowObject = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
          wb.push({
            sheetName: workbook.SheetNames[i],
            sheetData: rowObject,
          });
          //  console.log(wb);
          dispatch(setExcelWb(wb));
        });
      };
    }
  }, [file, dispatch]);

  return (
    <div>
      <div className="container mt-4">
        <h4 className="display-4 text-center mb-4">
          <i className="far fa-file-excel" />
          Read Excel File
        </h4>
      </div>
      <form>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            accept=".xlsx,.xls, .csv "
            onChange={onChange}
            onClick={() => console.log('select')}
          />
          <label className="custom-file-label" htmlFor="customFile"></label>
        </div>
      </form>
      {workBook ? <ShowWorkBook wb={workBook} fileName={fileName} /> : null}
    </div>
  );
};
