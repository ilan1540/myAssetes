import React from 'react';

import { Switch, Route } from 'react-router-dom';
//import { useSelector } from 'react-redux';

import Login from '../componants/auth/Login';
import Register from '../componants/auth/Register';
import { Home } from '../componants/deshbord/Home';

import { MyAssete } from '../componants/assetes/MyAssete';
import { EditHapkadot } from '../componants/assetes/EditHapkadot';
import { AllAssets } from '../componants/assetes/AllAssete';
import { EeditShiarok } from '../componants/assetes/EeditShiarok';
import { EditKopa } from '../componants/assetes/EditKopa';
import { OptionSelect } from '../componants/options/OptionSelect';
import { AddIncoms } from '../componants/incomes/AddIncoms';
import { AddKopa } from '../componants/assetes/AddKopa';
import { AllIncomes } from '../componants/incomes/AllIncomes';
import { OptionHendel } from '../componants/options/OptionHendel';
import { AddExpenses } from '../componants/expenses/AddExpenses';
import { AllExpenses } from '../componants/expenses/AllExpenses';
import { ReadExcelFile } from '../componants/fileHeandel/ReadExcelFile';

const Routes = () => {
  // const auth = useSelector((state) => state.firebase.auth);

  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/addIncome" component={AddIncoms} />
      <Route exact path="/assete/:id" component={MyAssete} />
      <Route exact path="/allassets" component={AllAssets} />
      <Route exact path="/allincomes" component={AllIncomes} />
      <Route exact path="/addkopa" component={AddKopa} />
      <Route exact path="/editHafkada/:id" component={EditHapkadot} />
      <Route exact path="/editShiarok/:id" component={EeditShiarok} />
      <Route exact path="/editkopa/:id" component={EditKopa} />
      <Route exact path="/options" component={OptionSelect} />
      <Route exact path="/sogHeandel" component={OptionHendel} />
      <Route exact path="/readExcel" component={ReadExcelFile} />
      <Route exact path="/addExp" component={AddExpenses} />
      <Route exact path="/allExp" component={AllExpenses} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
};

export default Routes;
