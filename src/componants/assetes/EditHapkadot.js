import React, { useState, useEffect } from 'react';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { AddRec } from './AddRec';
import { Hafkadot } from './Hafkadot';

export const EditHapkadot = (props) => {
  const [hafkada, setHafkada] = useState();

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
      setHafkada(kopot.hafkadot);
    }
  }, [kopot]);
  const firestore = useFirestore();
  const handelDel = (key) => {
    const arr = hafkada;
    if (arr) {
      const res = arr.filter((rec) => rec.date !== key);

      return setHafkada(res);
    }
  };

  const handelAdd = () => {
    const addHapkada = {
      secom: Number(helpers.secom),
      date: helpers.date,
    };
    setHafkada([...hafkada, addHapkada]);
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
      hafkadot: x,
      shiarok: kopot.shiarok,
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
      <Hafkadot
        id={props.match.params.id}
        hafkadot={hafkada}
        del={handelDel}
        save={handelSave}
      />
    </div>
  );
};
