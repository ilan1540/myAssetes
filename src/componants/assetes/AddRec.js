import React from 'react';
import { SelectDate } from '../helpers/DatePicker';
import { useSelector } from 'react-redux';
import { getSecom, getPratim } from '../../redux/actionHelper';
import { useDispatch } from 'react-redux';

export const AddRec = ({ handelAdd }) => {
  const dispatch = useDispatch();
  //const [secom, setSecom] = useState('');
  const date = useSelector((state) => state.helpers.date);
  const secom = useSelector((state) => state.helpers.secom);
  const pratim = useSelector((state) => state.helpers.pratim);

  return (
    <form>
      <div className="form-row">
        <div className="row">
          <div className="col-md-3 ">
            <label htmlFor="date">תאריך הפקדה</label>
          </div>
          <div className="col-md-3 ">
            <label htmlFor="secom">סכום הפקדה</label>
          </div>
          <div className="col-md-3 ">
            <label htmlFor="pratim">פרטים</label>
          </div>
          <div className="col-md-2 "></div>
        </div>
        <div className="row">
          <div className="form-group col-md-3 ">
            <div className="input-group">
              <SelectDate name="date" className="input-control" value={date} />
            </div>
          </div>
          <div className="form-group col-md-3 ">
            <input
              type="number"
              className="form-control"
              name="secom"
              value={secom}
              onChange={(e) => dispatch(getSecom(e.target.value))}
            />
          </div>
          <div className="form-group col-md-3 ">
            <input
              type="text"
              className="form-control"
              name="prstim"
              value={pratim}
              onChange={(e) => dispatch(getPratim(e.target.value))}
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
