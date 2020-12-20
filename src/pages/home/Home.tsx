import React from 'react';
import Table from '../../components/table/Table';
import classes from './Home.module.css';


const Home: React.FC = () => {
  return (
    <div >
      <div className={classes.Header}>
        <h2>Welcome to </h2>
        <h3>Because behind every scan is a person. </h3>
      </div>
      <Table />


    </div>)
}

export default Home