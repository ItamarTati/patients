import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import classes from './Table.module.css';
import shortendDate from '../../functions/shortendDate'

interface Patient{
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    phone: string,
    since: string
}
const Table: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]),
    [loading, setLoading] =  useState<boolean>(true), 
    ferrumPatientsAPI: string = 'https://us-central1-ferrum-dev.cloudfunctions.net/api/v1/patients'
    
    useEffect(() => {
        fetch(ferrumPatientsAPI)
        .then(response => response.json())
        .then(data => setPatients(data))
        .then(data => setLoading(false))
        .catch((error) => console.log(error));
      }, [ferrumPatientsAPI])

      if(loading === true){  
        return <Loading />
      }
      else{
    return (
    <div className = {classes.Table}>
        <h2>List of Users</h2>
        <table >
           <thead>
             <tr>
               <th title="Field #1">First</th>
               <th title="Field #2">Last</th>
               <th title="Field #3">E-mail</th>
               <th title="Field #4">Address</th>
               <th title="Field #5">Number</th>
               <th title="Field #6">Joined</th>
               <th title="Field #7">Visits</th>

             </tr>
           </thead>
           <tbody>
        {patients.map((patient) => 
           
      <tr key={patient.id}>
        <td>{patient.firstName}</td>
        <td>{patient.lastName}</td>
        <td><a href={`mailto:${patient.address}`}>{patient.email}</a></td>
        <td>{patient.address}</td>
        <td><a href={`tel:${patient.address}`}>{patient.phone}</a></td>
        <td>{shortendDate(patient.since)}</td>
        <td><Link to={`/patients/${patient.id}`}>View Visits</Link></td>
      </tr>

        )}
      </tbody>
      </table>
    </div>)}
}
export default Table


