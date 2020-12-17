import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
  physicianInfoApi: string = `https://us-central1-ferrum-dev.cloudfunctions.net/api/v1/physicians/${id.Physicianid}`
  useEffect(() => {
    fetch(physicianInfoApi)
        .then(response => response.json())
        .then(data => setPhysician(data))
        .catch((error) => console.log(error));
  }, [physicianInfoApi])


  return (
    <div key = {physician.id}>
        <h1>Physician Page</h1>
        <p>{physician.id}, {physician.firstName}, {physician.lastName}, {physician.phone}</p>

    </div>)
  }

export default Physician