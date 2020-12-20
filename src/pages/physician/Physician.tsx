import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Loading from '../../components/loading/Loading'
import Button from '../../components/button/Button'
import profile from '../../images/doctor.png'; 
interface PhysicianInfo{  
    id: string
    firstName: string,
    lastName: string,
    phone: string
}
interface PhysicianID{
  physicianID: string
}
let image = {
  border: '4px solid black',
  background: 'white',
  borderRadius: '15px',
  height: '400px',
  width: '320px'
};
let background = {
  background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
  margin: '0 auto',
  paddingTop: '100px',
  height: '120vh'
};



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
    <div key = {physician.id} style={background}>
        <h4>Hey I'm DR. {physician.firstName} {physician.lastName}</h4>
        <img src={profile} alt="Physician" style={image}/>
        <p >You can call me at <a href={`tel:${physician.phone}`}>{physician.phone}</a></p>
        <Button goHome={true}/>
        <Button goHome={false}/>
    </div>)}
  }}

export default Physician