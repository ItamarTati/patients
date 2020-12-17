import React, { useState, useEffect } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
interface Visit{  
    id: string,
    patientId: string,
    physicianId: string,
    time: string,
    location: string,
    symptoms: string,
    diagnosis: string
}
interface id{
  Patientid: string
}

const Visits: React.FC = () => {
  const id: id = useParams()
  const [visits, setVisits] = useState<Visit[]>([]), 
  ferrumVisitssAPI: string = `https://us-central1-ferrum-dev.cloudfunctions.net/api/v1/patients/${id.Patientid}/visits`
    
  useEffect(() => {
    fetch(ferrumVisitssAPI)
    .then(response => response.json())
    .then(data => setVisits(data))
    .catch((error) => console.log(error));
    }, [ferrumVisitssAPI])
  
    return (
    <div >
        <h1>Visits Page</h1>
        {
        visits.map((visit) => 
        <div key={visit.id}>
        <p >{visit.id}, {visit.patientId}, {visit.physicianId}, 
        {visit.time}, {visit.location}, {visit.symptoms}, {visit.diagnosis} </p>
        <p><Link to={`/physicians/${visit.physicianId}`}>Look at phycisian</Link></p>
        </div> 
        )}

    </div>)
  }

export default Visits