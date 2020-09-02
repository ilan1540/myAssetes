import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';

export const AddKopa = (props) => {
  const [accountNo, setAccountNo] = useState('');
  const [motavName, setMotavName] = useState('');
  const [gofMenahel, setGofMenahel] = useState('');
  const [maslolName, setMaslolName] = useState('');
  const [codeMaslol, setCodeMaslol] = useState('');
  const [dNihol, setDNihol] = useState('');
  const firestore = useFirestore();

  function addKopa(e) {
    e.preventDefault();
    const newRec = {
      accountNo: accountNo,
      motavName: motavName,
      gofMenahel: gofMenahel,
      maslolName: maslolName,
      codeMaslol: codeMaslol,
      dNihol: dNihol,
      hafkadot: [],
      shiarok: [],
    };
    return firestore
      .collection('kopot')
      .add(newRec)
      .then(() => props.history.push('/allassets'));
  }

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
              value={accountNo}
              onChange={(e) => setAccountNo(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4 ">
            <label htmlFor="motavName">שם המוטב</label>
            <input
              type="text"
              className="form-control"
              name="motavName"
              value={motavName}
              onChange={(e) => setMotavName(e.target.value)}
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
              value={gofMenahel}
              onChange={(e) => setGofMenahel(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4 ">
            <label htmlFor="maslolName">שם מסלול</label>
            <input
              type="text"
              className="form-control"
              name="maslolName"
              value={maslolName}
              onChange={(e) => setMaslolName(e.target.value)}
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
              value={codeMaslol}
              onChange={(e) => setCodeMaslol(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4 ">
            <label htmlFor="dNihol">דמי ניהול</label>
            <input
              type="text"
              className="form-control"
              name="dNihol"
              value={dNihol}
              onChange={(e) => setDNihol(e.target.value)}
            />
          </div>
        </div>
      </form>
      <button className="btn btn-sm  btn-primary btn-block" onClick={addKopa}>
        Add Sample kopa
      </button>
    </div>
  );
};
