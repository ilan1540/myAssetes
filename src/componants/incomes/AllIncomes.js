import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { numberWithCommas } from '../globalFunc';
import { YearList } from '../helpers/YearList';
import { SogIncomeList } from '../helpers/SogIncomeList';

export const AllIncomes = () => {
  const [year, setYear] = useState(0);
  const [sog, setSog] = useState('');
  const [sumIncome, setSumIncome] = useState(0);
  const [sumNicoyim, setSumNicoyim] = useState(0);
  // const [filterSog, setFilterSog] = useState([]);

  useFirestoreConnect([
    {
      collection: 'incomes',
      where: ['year', '==', year],
      // orderBy: ['month', 'desc'],
    },
  ]);
  const incomes = useSelector(
    (state) =>
      state.firestore.ordered.incomes && state.firestore.ordered.incomes
  );

  useEffect(() => {
    var sum1 = 0;
    var sum2 = 0;
    incomes &&
      incomes.map((r) => {
        sum1 = sum1 + Number(r.broto);
        sum2 =
          sum2 +
          Number(r.tax) +
          Number(r.bl) +
          Number(r.br) +
          Number(r.gemel) +
          Number(r.outher);
        return null;
      });
    setSumIncome(sum1);
    setSumNicoyim(sum2);
  }, [incomes, sumIncome, sumNicoyim]);

  useEffect(() => {
    var filtered = [];

    incomes &&
      incomes.map((r) => {
        if (r.sogIncome === sog) {
          filtered.push(r);
        }

        return null;
      });

    //  setFilterSog(filtered);
  }, [incomes, sog]);

  // console.log(incomes);
  return (
    <div className="container mt-3">
      <h1 className="text-center">
        All <span className="text-primary">Incomes</span>
      </h1>

      <div className="row">
        <div className="row p-1 m-1">
          <YearList
            className="form-control"
            type="text"
            name="year"
            value={year}
            onSelectYear={(e) => setYear(e.target.value)}
          />
          <SogIncomeList
            className="form-control"
            type="text"
            name="year"
            value={sog}
            onSelectSog={(e) => setSog(e.target.value)}
          />
        </div>
        <div className="col-md-12">
          <form>
            <table className="table table-striped  table-sm">
              <thead>
                <tr>
                  <th scope="col"></th>

                  <th scope="col">חודש</th>
                  <th scope="col">תאור הכנסה</th>
                  <th scope="col">הכנסה ברוטו</th>
                  <th scope="col">מס הכנסה </th>
                  <th scope="col"> ביטוח לאומי </th>
                  <th scope="col">ביטוח בריאות</th>
                  <th scope="col">ניכויים גמל </th>
                  <th scope="col"> ניכויים אחרים</th>
                  <th scope="col"> הכנסה נטו</th>
                </tr>
              </thead>
              <tbody>
                {incomes &&
                  incomes.map((rec) => (
                    <tr key={rec.id}>
                      <td>
                        <Link
                          className="btn btn-sm btn-outline-secondary"
                          to={`/assete/${rec.id}`}
                        >
                          פרטים
                        </Link>
                      </td>

                      <td>{rec.month}</td>
                      <td>{rec.sogIncome}</td>
                      <td>{numberWithCommas(rec.broto)}</td>
                      <td>{numberWithCommas(rec.tax)}</td>
                      <td>{numberWithCommas(rec.br)}</td>
                      <td>{numberWithCommas(rec.bl)}</td>
                      <td>{numberWithCommas(rec.gemel)}</td>
                      <td>{numberWithCommas(rec.outher)}</td>
                      <td>{numberWithCommas(rec.outher)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};
