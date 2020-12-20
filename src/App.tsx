import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/not-found/notFound';
import Physician from './pages/physician/Physician';
import Visits from './pages/visits/Visits';

const App: React.FC = () => {
  return (
  <div className='App'>
    <Switch>
      <Route exact path='/patients' component={Home} />
      <Route exact path='/patients/not-found' component={NotFound} />
      <Route exact path='/patients/:patientID/:firstName/:lastName' component={Visits} />
      <Route exact path='/patients/physicians/:physicianID' component={Physician} />
    </Switch>
  </div>)
}

export default withRouter(App);
