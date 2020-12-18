import React, { useState, useEffect } from 'react';
import Container from '../container/Container';
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/Loading';

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
    <div >
        <h2>List of Users</h2>
        {patients.map((patient) => 
        <div>
        <p key = {patient.id}>{patient.id}, {patient.firstName}, {patient.lastName}, 
        {patient.email}, {patient.address}, {patient.phone}, {patient.since} </p>
        <p><Link to={`/${patient.id}`}>Look at visits</Link></p>
        </div>
        )}
        <Container/>
    </div>)}
}
export default Table