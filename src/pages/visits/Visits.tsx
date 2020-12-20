import React, { useState, useEffect } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import classes from './Visits.module.css';
import shortendDate from '../../functions/shortendDate';
import Button from '../../components/button/Button'

interface Visit {
  id: string,
  patientId: string,
  physicianId: string,
  time: string,
  location: string,
  symptoms: string,
  diagnosis: string
}
interface Patient {
  patientID: string
  firstName: string
  lastName: string
}



const Visits: React.FC = () => {
  const patient: Patient = useParams(),
    [visits, setVisits] = useState<Visit[]>([]),
    [loading, setLoading] = useState<boolean>(true),
    [requestWorked, setRequestWorked] = useState<boolean>(true),
    ferrumVisitssAPI: string = `https://us-central1-ferrum-dev.cloudfunctions.net/api/v1/patients/${patient.patientID}/visits`

  useEffect(() => {
    fetch(ferrumVisitssAPI)
      .then(response => response.json())
      .then(data => setVisits(data))
      .then(data => setLoading(false))
      .catch((error) => setRequestWorked(false));
  }, [ferrumVisitssAPI])

  if (requestWorked === false) {
    return <Redirect to='/patients/not-found' />
  } else {
    if (loading === true) {
      return <Loading />
    }
    else {
      return (
        <div className={classes.Visits}>
          <h2 className={classes.Patient}>{patient.firstName} {patient.lastName}'s visits</h2>
          <div className={classes.Containers}>
            {
              visits.map((visit) =>
                <div key={visit.id} className={classes.Container}>
                  <h3>{shortendDate(visit.time)} at {visit.location}</h3>
                  <ul>
                    <li><strong>Symptoms:</strong> {visit.symptoms}</li>
                    <li><strong>Diagnosis:</strong> {visit.diagnosis} </li>
                    <li><Link to={`/patients/physicians/${visit.physicianId}`}>Click Here to see the Physician</Link></li>
                  </ul>
                </div>
              )}

          </div>
          <Button goHome={false} />
        </div>)
    }
  }
}

export default Visits