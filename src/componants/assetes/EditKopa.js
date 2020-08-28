import React from 'react';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

export const EditKopa = (props) => {
  const firestore = useFirestore();

  useFirestoreConnect([
    {
      collection: 'kopot',
      doc: props.match.params.id,
    },
  ]);

  var kopot = useSelector(
    ({ firestore: { ordered } }) => ordered.kopot && ordered.kopot[0]
  );

  const onChangeHendel = (e) => {
    kopot = { ...kopot, [e.target.name]: e.target.value };
  };

  async function onSaveEdit() {
    const id = kopot.id;
    const newRec = {
      accountNo: kopot.accountNo,
      motavName: kopot.motavName,
      gofMenahel: kopot.gofMenahel,
      maslolName: kopot.maslolName,
      codeMaslol: kopot.codeMaslol,
      dNihol: kopot.dNihol,
      hafkadot: kopot.hafkadot,
      shiarok: kopot.shiarok,
    };
    return await firestore
      .collection('kopot')
      .doc(id)
      .set(newRec)
      .then(() => props.history.push('/allassets'));
  }

  if (kopot && kopot.id) {
    return (
      <div className="container mt-3">
        <div className="col-md-10 mx-auto">
          <h1 className="text-center">
            Add <span className="text-primary">Account</span>
          </h1>
        </div>
        <form>
          <div className="form-row">
            <div className="form-group col-md-4 ">
              <label htmlFor="accountNo">מספר חשבון</label>
              <input
                type="text"
                className="form-control"
                name="accountNo"
                defaultValue={kopot.accountNo}
                onChange={onChangeHendel}
              />
            </div>
            <div className="form-group col-md-4 ">
              <label htmlFor="motavName">שם המוטב</label>
              <input
                type="text"
                className="form-control"
                name="motavName"
                defaultValue={kopot.motavName}
                onChange={onChangeHendel}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4 ">
              <label htmlFor="gofMenahel">גוף מנהל</label>
              <input
                type="text"
                className="form-control"
                name="gofMenahel"
                defaultValue={kopot.gofMenahel}
                onChange={onChangeHendel}
              />
            </div>
            <div className="form-group col-md-4 ">
              <label htmlFor="maslolName">שם מסלול</label>
              <input
                type="text"
                className="form-control"
                name="maslolName"
                defaultValue={kopot.maslolName}
                onChange={onChangeHendel}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4 ">
              <label htmlFor="codeMaslol">קוד מסלול</label>
              <input
                type="text"
                className="form-control"
                name="codeMaslol"
                defaultValue={kopot.codeMaslol}
                onChange={onChangeHendel}
              />
            </div>
            <div className="form-group col-md-4 ">
              <label htmlFor="dNihol">דמי ניהול</label>
              <input
                type="text"
                className="form-control"
                name="dNihol"
                defaultValue={kopot.dNihol}
                onChange={onChangeHendel}
              />
            </div>
          </div>
        </form>
        <button
          className="btn btn-sm  btn-primary btn-block"
          onClick={onSaveEdit}
        >
          Sav edit
        </button>
      </div>
    );
  } else return null;

  /*
    
    
    */
};
