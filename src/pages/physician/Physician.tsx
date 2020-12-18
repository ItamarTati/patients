import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Loading from '../../components/loading/Loading'

interface PhysicianInfo{  
    id: string
    firstName: string,
    lastName: string,
    phone: string
}
interface id{
  Physicianid: string
}

const Physician: React.FC = () => {
  const id: id = useParams()
  const [physician, setPhysician] = useState<Partial<PhysicianInfo>>({}),
  [loading, setLoading] =  useState<boolean>(true),
  [requestWorked, setRequestWorked] =  useState<boolean>(true), 
  physicianInfoApi: string = `https://us-central1-ferrum-dev.cloudfunctions.net/api/v1/physicians/${id.Physicianid}`
  useEffect(() => {
    fetch(physicianInfoApi)
        .then(response => response.json())
        .then(data => setPhysician(data))
        .then(data => setLoading(false))
        .catch((error) => setRequestWorked(false));
  }, [physicianInfoApi]);
  if(requestWorked === false){
    return <Redirect to='/not-found' />
  } else{
    if(loading === true){  
      return <Loading />
    }
    else{
  return (
    <div key = {physician.id}>
        <h1>Physician Page</h1>
        <p>{physician.id}, {physician.firstName}, {physician.lastName}, {physician.phone}</p>

    </div>)}
  }}

export default Physician