import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Home from './pages/home/Home'
import NotFound from './pages/not-found/notFound'
import Physician from './pages/physician/Physician'
import Visits from './pages/visits/Visits'
import './App.css';

const App: React.FC = () => {
  return (
  <div className='App'>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/not-found' component={NotFound} />
      <Route exact path='/:Patientid/visits' component={Visits} />
      <Route exact path='/physicians/:Physicianid' component={Physician} />
    </Switch>
  </div>)
}

export default withRouter(App);