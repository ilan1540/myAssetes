import React from 'react';
import { PageHeader } from '../helpers/PageHeader';
import { Link } from 'react-router-dom';

export const AllExpenses = () => {
  return (
    <div className="container mt-2">
      <PageHeader word1="רשימת" word2="הוצאות" />
      <div className="row justify-content-between">
        <div className="col-md-1">
          <Link to="/addkopa">
            <i className="fas icom35px fa-plus-circle"></i>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <form>
            <table className="table table-striped  table-sm">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">תאריך</th>
                  <th scope="col">קבוצת הוצאות</th>
                  <th scope="col">סכום</th>
                  <th scope="col">שם מסלול</th>
                  <th scope="col">תאריך שיערוך</th>
                  <th scope="col">יתרה</th>
                </tr>
              </thead>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};
