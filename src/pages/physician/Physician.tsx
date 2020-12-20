import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Loading from '../../components/loading/Loading'
import Button from '../../components/button/Button'
import profile from '../../images/doctor.png'; 
import classes from './Physcian.module.css';
interface PhysicianInfo{  
    id: string
    firstName: string,
    lastName: string,
    phone: string
}
interface PhysicianID{
  physicianID: string
}

const Physician: React.FC = () => {
  const physicianID: PhysicianID = useParams()
  const [physician, setPhysician] = useState<Partial<PhysicianInfo>>({}),
  [loading, setLoading] =  useState<boolean>(true),
  [requestWorked, setRequestWorked] =  useState<boolean>(true), 
  physicianInfoApi: string = `https://us-central1-ferrum-dev.cloudfunctions.net/api/v1/physicians/${physicianID.physicianID}`
  useEffect(() => {
    fetch(physicianInfoApi)
        .then(response => response.json())
        .then(data => setPhysician(data))
        .then(data => setLoading(false))
        .catch((error) => setRequestWorked(false));
  }, [physicianInfoApi]);
  if(requestWorked === false){
    return <Redirect to='/patients/not-found' />
  } else{
    if(loading === true){  
      return <Loading />
    }
    else{
  return (
    <div>
    <h2>Hey I'm DR. {physician.firstName} {physician.lastName}</h2>
    <div key = {physician.id} className={classes.Card}>
        <img src={profile} alt="Physician" />
        <h3 >You can call me at <a href={`tel:${physician.phone}`}>{physician.phone}</a></h3>
    </div>
    <Button goHome={true}/>
    <Button goHome={false}/>
    </div>
    
    
    )}
  }}

export default Physician