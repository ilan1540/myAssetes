import React, { useState, useEffect } from 'react';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { AddRec } from './AddRec';
import { Shiarok } from './Shiarok';

export const EeditShiarok = (props) => {
  const [shiarok, setShiarok] = useState();
  useFirestoreConnect([
    {
      collection: 'kopot',
      doc: props.match.params.id,
    },
  ]);
  const kopot = useSelector(
    ({ firestore: { ordered } }) => ordered.kopot && ordered.kopot[0]
  );
  const helpers = useSelector((state) => state.helpers);

  useEffect(() => {
    if (kopot) {
      setShiarok(kopot.shiarok);
    }
  }, [kopot]);
  const firestore = useFirestore();

  const handelDel = (key) => {
    const arr = shiarok;
    if (arr) {
      const res = arr.filter((rec) => rec.date !== key);

      return setShiarok(res);
    }
  };

  const handelAdd = () => {
    const addShiarok = {
      secom: Number(helpers.secom),
      date: helpers.date,
    };
    setShiarok([...shiarok, addShiarok]);
  };
  const handelSave = async (x) => {
    const id = kopot.id;
    const newRec = {
      accountNo: kopot.accountNo,
      motavName: kopot.motavName,
      gofMenahel: kopot.gofMenahel,
      maslolName: kopot.maslolName,
      codeMaslol: kopot.codeMaslol,
      dNihol: kopot.dNihol,
      hafkadot: kopot.hafkadot,
      shiarok: x,
    };

    return await firestore
      .collection('kopot')
      .doc(id)
      .set(newRec)
      .then(() => props.history.push('/allassets'));
  };

  return (
    <div className="container mt-4">
      <AddRec handelAdd={handelAdd} />
      <Shiarok
        id={props.match.params.id}
        shiarok={shiarok}
        del={handelDel}
        save={handelSave}
      />
    </div>
  );
};
