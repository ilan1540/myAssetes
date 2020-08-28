import React from 'react';
import { SelectDate } from '../helpers/DatePicker';
import { useSelector } from 'react-redux';
import { getSecom } from '../../redux/actionHelper';
import { useDispatch } from 'react-redux';

export const AddRec = ({ handelAdd }) => {
  const dispatch = useDispatch();
  //const [secom, setSecom] = useState('');
  const date = useSelector((state) => state.helpers.date);
  const secom = useSelector((state) => state.helpers.secom);

  return (
    <form>
      <div className="form-row">
        <div className="row">
          <div className="col-md-4 ">
            <label htmlFor="date">תאריך הפקדה</label>
          </div>
          <div className="col-md-4 ">
            <label htmlFor="secom">סכום הפקדה</label>
          </div>
          <div className="col-md-2 "></div>
        </div>
        <div className="row">
          <div className="form-group col-md-4 ">
            <div className="input-group">
              <SelectDate name="date" className="input-control" value={date} />
            </div>
          </div>
          <div className="form-group col-md-4 ">
            <input
              type="number"
              className="form-control"
              name="secom"
              value={secom}
              onChange={(e) => dispatch(getSecom(e.target.value))}
            />
          </div>
          <div className="form-group col-md-2 ">
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={handelAdd}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
