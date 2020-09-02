import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

export const OptionSelect = (props) => {
  const firestore = useFirestore();

  useFirestoreConnect([
    {
      collection: 'options',
    },
  ]);
  var options = useSelector(
    (state) =>
      state.firestore.ordered.options && state.firestore.ordered.options[0]
  );
  const onChangeHendel = (e) => {
    options = { ...options, [e.target.name]: !options[e.target.name] };
    console.log(options);
    firestore
      .collection('options')
      .doc('allow')
      .set(options)
      .then(() => props.history.push('/'));
    return null;
  };

  if (options) {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back To Dashboard
            </Link>
          </div>
        </div>
        <div
          className="card container"
          style={{ width: '18rem', direction: 'ltr' }}
        >
          <div className="card-header">אפשרויות ניהול</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>אפשר מחיקה</label>{' '}
                <input
                  type="checkbox"
                  name="allowDelete"
                  checked={!!options.allowDelete}
                  onChange={onChangeHendel}
                />
              </div>

              <div className="form-group">
                <label>אפשר הוספה</label>{' '}
                <input
                  type="checkbox"
                  name="allowAdd"
                  checked={!!options.allowAdd}
                  onChange={onChangeHendel}
                />
              </div>

              <div className="form-group">
                <label>אפשר עריכה</label>{' '}
                <input
                  type="checkbox"
                  name="allowEdit"
                  checked={!!options.allowEdit}
                  onChange={onChangeHendel}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else return null;
};
